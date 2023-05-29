using May24Homework.Data;
using May24Homework.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace May24Homework.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTrackerController : ControllerBase
    {
        private string _connectionString;
        public CandidateTrackerController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("AddCandidate")]
        public void AddCandidate(Candidate c)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(c);
        }
        [HttpGet]
        [Route("GetAll")]
        public List<Candidate> GetAll()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpGet]
        [Route("GetByStatus")]
        public List<Candidate> GetByStatus(RegistrationStatus status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetByStatus(status);
        }
        [HttpPost]
        [Route("UpdateStatus")]
        public void UpdadateStatus(ChangeStatusViewModel vm)
        {
            vm.Candidate.RegistrationStatus = vm.RegistrationStatus;
            var repo = new CandidateRepository(_connectionString);
            repo.SetStatus(vm.Candidate);
        }
        [HttpGet]
        [Route("GetCountsForStatuses")]
        public StatusCountViewModel GetCountsForStatuses(RegistrationStatus status)
        {
            var repo = new CandidateRepository(_connectionString);
            return new StatusCountViewModel
            {
                Count = repo.GetCountForStatus(status),
                PendingCount = repo.GetCountForStatus(RegistrationStatus.Pending),
                ConfirmedCount = repo.GetCountForStatus(RegistrationStatus.Confirmed),
                RefusedCount = repo.GetCountForStatus(RegistrationStatus.Refused)

            };
        }
        [HttpGet]
        [Route("GetCandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(id);
        }
    }
}
