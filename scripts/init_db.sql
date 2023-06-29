CREATE DATABASE LABORATOIRE;

USE  LABORATOIRE;
 
Create table TEST_RESULT(
	ID_TEST_RESULT integer(255) AUTO not null,
    ID_TEST_REQUEST integer(255) AUTO not null,
    NAME_TRES Varchar(50) not null,
    VALUE_TR Varchar(20) );                                               

    

    Create table TEST_REQUEST(
    ID_TEST_REQUEST integer(255) AUTO not null,
    ID_PARTIENT integer(255) AUTO not null,
    ID_TEST integer(255) AUTO not null,
    ID_BILL integer(255) AUTO not null,
    NAME_TREQ Varchar(50) not null,
    DATE_TREQ Date(8),
    STATUT_TREQ Varchar(255));

    
   Create table PATIENT(
   ID_PATIENT integer(255) AUTO primary key,
   NAME_P Varchar(25) not null,       
   FiRS_NAME_P Varchar(25),                                                  
    ADRESS_P Varchar(50),
    BOTH_DATE_P Date(8),
    PHONE_NIMBER integer(20),                                                    
    SEX_P Varchar(1));

  

  create table BILL(
   ID_BILL integer(255) AUTO primary key,
                                                              
   CREATION_DATE Date(8),
   TOTAL_AMOUNT integer(255),
   TOTAL_AMOUNT_PAID integer(255));

  Create table TEST(
  ID_TEST integer(255) AUTO not null,
                                                           
  ID_TEST_TYPE integer(255) AUTO not null,
  NAME_T Varchar((25)) not null,
  DESCRIPTION_T Varchar(255),
  PRICE_T  integer(255),
  MIN_TIME_FRAME integer(100),
  MAX_TIME_FRAME integer(100));
 
 Create table TEST_TYPE(

  ID_TEST_TYPE integer(255) AUTO primary key ,
  NAME_TP Varchar(50));

 Create table RESULT(
  ID_RESULT integer(255) AUTO  not null  ,
  ID_TEST integer(255) AUTO not null,
  NAME_R Varchar(25),
  DESCRIPTION_R Varchar(255));

 Create table RESULT_ITEM(
  ID_RESULT_ITEM integer(255) AUTO not null ,
  ID_RESULT integer(255) AUTO not null ,
  UNIT Varchar(25),
  TYPE_RI Varchar(255));                                                
                                                                              

 Create table BILL_ITEM(
  ID_BILL_ITEM integer(25) AUTO not null,         
  ID_BILL integer(20) AUTO not null,
  PRICE integer(255),
  QUANTITY integer(55),
  DISCOUNT integer(50),
  DESCRIPTION_B Varchar(255));

 Create table ROLE(
  ID_ROLE integer(50) AUTO primary key,    
  NAME_R Varchar(25),
  DESCRIPTION_RO Varchar(255));

 Create table USER_ROLE(
  ID_ROLE integer(255) AUTO not null,
  ID_USER integer(200) AUTO not null);

 Create table USER(
  ID_USER integer(45) AUTO primary key,
  NAME_T Varchar(20) not null,
 FIRST_NAME Varchar(25),
  ADRESS Varchar(20),
  PHONE_NUNBER integer(60),
  PASSWORD_U Varchar(50) not null);

 Create table PAYMENT(
  ID_PAYMENT integer(255) AUTO not null,
  ID_USER integer(255) AUTO not null,
  ID_BILL integer(255) AUTO not null,
  DATE_PY Date(8),
  AMOUNT_PY integer(55));

 Create table SAMPLE(
  ID_SAMPLE integer(20) AUTO not null,
  ID_SAMPLE_TYPE integer(40) AUTO not null,
  ID_TEST_REQUEST integer(50) AUTO not nulL,
  NAME_S Varchar(255) not null,
  PRODUCTION_DATE Date(8),
  EXPIRATION_DATE Date(8));

 Create table SAMPLE_TYPE(
  ID_SAMPLE_TYPE integer(255) AUTO primary key,
  NAME_ST Varchar(255),
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
 

 

 
  
                                           
     
 
     
  
   
  
