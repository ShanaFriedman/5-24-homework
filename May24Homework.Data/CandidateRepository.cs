using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace May24Homework.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate c)
        {
            var context = new CandidatesDbContext(_connectionString);
            context.Candidates.Add(c);
            context.SaveChanges();
        }
        public List<Candidate> GetAll()
        {
            var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.ToList();
        }
        public List<Candidate> GetByStatus(RegistrationStatus status)
        {
            var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == status).ToList();
        }
        public void SetStatus(Candidate c)
        {
            var context = new CandidatesDbContext(_connectionString);
            context.Update(c);
            context.SaveChanges();
        }
        public int GetCountForStatus(RegistrationStatus status)
        {
            var context = new CandidatesDbContext(_connectionString);
            //return context.Database.ExecuteSqlInterpolated($"SELECT COUNT(*) FROM Candidates where RegistrationStatus = {status}");
            return context.Candidates.Where(c => c.RegistrationStatus == status).Count();
        }
        public Candidate GetCandidate(int id)
        {
            var context = new CandidatesDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
    }
}
