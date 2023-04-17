CREATE Table Divorces2000_2015 ( 
	Divorce_date Varchar(15),
	Type_of_divorce Varchar (15),
	Nationality_partner_man Varchar (15),
	DOB_partner_man Varchar (15),
	Place_of_birth_partner_man Varchar (35),
	Birth_municipality_of_partner_man Varchar (35),
	Birth_federal_partner_man Varchar (35),
	Birth_country_partner_man Varchar (35),
	Age_partner_man numeric,
	Residence_municipality_partner_man Varchar (35),
	Residence_federal_partner_man Varchar (35),
	Residence_country_partner_man Varchar (35),
	Monthly_income_partner_man_peso numeric,
	Occupation_partner_man Varchar (35),
	Place_of_residence_partner_man Varchar (35),
	Nationality_partner_woman Varchar (35),
	DOB_partner_woman Varchar (35),
	DOB_registration_date_partner_woman Varchar (35),
	Place_of_birth_partner_woman Varchar (35),
	Birth_municipality_of_partner_woman Varchar (35),
	Birth_federal_partner_woman Varchar (35),
	Birth_country_partner_woman Varchar (35),
	Age_partner_woman numeric,
	Place_of_residence_partner_woman Varchar (35),
	Residence_municipality_partner_woman Varchar (35),
	Residence_federal_partner_woman Varchar (35),
	Residence_country_partner_woman Varchar (35),
	Occupation_partner_woman Varchar (35),
	Monthly_income_partner_woman_peso numeric,
	Date_of_marriage Varchar (35),
	Marriage_certificate_place Varchar (35),
	Marriage_certificate_municipality Varchar (35),
	Marriage_certificate_federal Varchar (35),
	Level_of_education_partner_man Varchar (35),
	Employment_status_partner_man Varchar (50),
	Level_of_education_partner_woman Varchar (35),
	Employment_status_partner_woman Varchar (50),
	Marriage_duration Varchar (35),
	Marriage_duration_months Varchar (35),
	Num_Children numeric,
	Custody Varchar (35)
	
); 

Create Table Divorce_Compatibility (
	Zod_sign_man Varchar (35),
	Zod_sign_woman	Varchar (35),
	zod_combo Varchar (35),
	Compatibility_rate Decimal(10,2)
);