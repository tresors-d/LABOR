CREATE DATABASE LABORATOIRE;

USE  LABORATOIRE;
 
Create table TEST_RESULT(
	ID_TEST_RESULT integer not null,
    ID_TEST_REQUEST Varchar not null,
    NAME_TRES Varchar not null,
    VALUE_TR Varchar );                                               

    

  Create table TEST_REQUEST(
    ID_TEST_REQUEST Varchar not null,
    ID_PARTIENT Varchar not null,
    ID_TEST Varchar not null,
    ID_BILL Varchar not null,
    NAME_TREQ Varchar not null,
    DATE_TREQ Date,
    STATUT_TREQ Varchar);

    
  Create table PATIENT(
   ID_PATIENT Varchar primary key,
   NAME_P Varchar not null,       
   FiRS_TNAME_P Varchar,                                                  
    ADRESS_P Varchar,
    BOTH_DATE_P Date,
    PHONE_NIMBER Int,                                                    
    SEX_P Varchar);

  

  create table BILL(
   ID_BILL Varchar primary key,
                                                              
   CREATION_DATE Date,
   TOTAL_AMOUNT Int,
   TOTAL_AMOUNT_PAID Int);

 Create table TEST(
  ID_TEST Varchar not null,
                                                           
  ID_TEST_TYPE Varchar not null,
  NAME_T Varchar not null,
  DESCRIPTION_T Varchar,
  PRICE_T  integer,
  MIN_TIME_FRAME Varchar,
  MAX_TIME_FRAME Varchar);
 
 Create table TEST_TYPE(

  ID_TEST_TYPE Varchar primary key ,
  NAME_TP Varchar);

 Create table RESULT(
  ID_RESULT Varchar  not null  ,
  ID_TEST Varchar not null,
  NAME_R Varchar,
  DESCRIPTION_R Varchar);

 Create table RESULT_ITEM(
  ID_RESULT_ITEM Varchar not null ,
  ID_RESULT Varchar not null ,
  UNIT Varchar,
  TYPE_RI Varchar);                                                
                                                                              

 Create table BILL_ITEM(
  ID_BILL_ITEM Varchar not null,         
  ID_BILL Varchar not null,
  PRICE integer,
  QUANTITY Int,
  DISCOUNT integer,
  DESCRIPTION Varchar);

 Create table ROLE(
  ID_ROLE Varchar primary key,    
  NAME_R Varchar,
  DESCRIPTION_RO Varchar);

 Create table USER_ROLE(
  ID_ROLE Varchar not null,
  ID_USER Varchar not null);

 Create table USER(
  ID_USER Varchar primary key,
  NAME_T Varchar not null,
 FIRST_NAME Varchar,
  ADRESS Varchar,
  PHONE_NUNBER integer,
  PASSWORD_U Varchar not null);

 Create table PAYMENT(
  ID_PAYMENT Varchar not null,
  ID_USER Varchar not null,
  ID_BILL Varchar not null,
  DATE_PY Date,
  AMOUNT_PY integer);

 Create table SAMPLE(
  ID_SAMPLE Varchar not null,
  ID_SAMPLE_TYPE Varchar not null,
  ID_TEST_REQUEST Varchar not nulL,
  NAME_S Varchar not null,
  PRODUCTION_DATE Date,
  EXPIRATION_DATE Date);

 Create table SAMPLE_TYPE(
  ID_SAMPLE_TYPE Varchar primary key,
  NAME_ST Varchar,
  DESCRIPTION Varchar);

 
 ALTER TABLE USER_ROLE ADD CONSTRAINT PK_USER_ROLE PRIMARY KEY (ID_ROLE, ID_USER);

 ALTER TABLE TEST_REQUEST ADD CONSTRAINT FK_TEST_REQUEST FOREIGN KEY (ID_PATIENT, ID_BILL, ID_TEST) REFERENCES PATIENT, BILL, TEST (ID_TEST_RESULT, ID_BILL, ID_TEST);
 ALTER TABLE TEST ADD CONSTRAINT FK_TEST FORENGN KEY (ID_TEST_TYPE) REFERENCES TEST_TYPE (ID_TEST_TYPE);
 ALTER TABLE RESULT ADD CONSTRAINT FK_RESULT FOREIGN KEY (ID_TEST) REFERENCES TEST (ID_TEST);
 ALTER TABLE RESULT_ITEM CONSTRAINT FK_RESULT_ITEM FOREIGN KEY (ID_RESULT) REFERENCES RESULT (ID_RESULT);
 ALTER TABLE BILL_ITEM CONSTRAINT FK_BILL_ITEM FOREIGN KEY (ID_BILL) REFERENCES BILL (ID_BILL);
 ALTER TABLE PAYMENTS CONSTRAINT FK_PAYMENTS FOREIGN KEY (ID_USER, ID_BILL) REFERENCES USER, BILL (ID_USER, ID_BILL);
 ALTER TABLE SAMPLE  CONSTRAINT FK_SAMPLE FORIEGN KEY (ID_SAMPLE_TYPE, ID_TEST_REQUEST) REFERENCES SAMPLE_TYPE, TEST_REQUEST (ID_SAMPE_TYPE, ID_TEST_REQUEST);
 ALTER TABLE TEST_RESULT CONSTRAINT FK_TEST_RESULT FORIEGN KEY (ID_TEST_REQUEST) REFERENCES TEST_RESULT (ID_TEST_RESULT); 
 

 

 
  
                                           
     
 
     
  
   
  
