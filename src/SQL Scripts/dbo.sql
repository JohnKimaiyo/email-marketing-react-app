/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Column1]
      ,[Type]
      ,[Status]
      ,[City]
      ,[State]
      ,[PostalCode]
      ,[GenderCode]
      ,[BirthDate]
      ,[MaritalStatus]
      ,[Enrolled on ]
      ,[Living status]
  FROM [Email Subscriber List].[dbo].[Email List$]