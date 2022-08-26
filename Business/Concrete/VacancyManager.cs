﻿using System;
using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;

namespace Business.Concrete
{
    public class VacancyManager : IVacancyService
    {
        private IVacancyDal _vacancyDal;

        public VacancyManager(IVacancyDal vacancyDal)
        {
            _vacancyDal = vacancyDal;
        }

        public IDataResult<Vacancy> Get(int id)
        {
            return new SuccessDataResult<Vacancy>(_vacancyDal.Get(p => p.Id == id));
        }

        public IDataResult<List<Vacancy>> GetList()
        {
            return new SuccessDataResult<List<Vacancy>>(_vacancyDal.GetList().ToList());
        }

        public IDataResult<List<Vacancy>> GetListByCategory(int id)
        {
            return new SuccessDataResult<List<Vacancy>>(_vacancyDal.GetList(p => p.Id == id).ToList());
        }

        public IResult Add(Vacancy vacancy)
        {
            _vacancyDal.Add(vacancy);
            return new SuccessResult(Messages.VacancyAdded);
        }

        public IResult Delele(Vacancy vacancy)
        {
            _vacancyDal.Delete(vacancy);
            return new SuccessResult(Messages.VacancyDeleted);

        }

        public IResult Update(Vacancy vacancy)
        {
            _vacancyDal.Update(vacancy);
            return new SuccessResult(Messages.VacancyUpdated);

        }
    }
}

