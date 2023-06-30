CREATE DATABASE LABORATOIRE;

USE  LABORATOIRE;
 
CREATE TABLE test_result(
  id INT NOT NULL AUTO_INCREMENT,
  id_test_request INT NOT NULL,
  name_tr VARCHAR(50) NOT NULL,
  value_tr VARCHAR(20),
  PRIMARY KEY (id)
);                                               

CREATE TABLE test_request(
  id INT NOT NULL AUTO_INCREMENT, 
  id_patient INT NOT NULL,
  id_test INT NOT NULL,
  id_bill INT NOT NULL,
  name_treq VARCHAR(50) NOT NULL,
  date_treq DATE NULL,
  statut_treq VARCHAR(100) NULL,
  PRIMARY KEY (id)
);
    
Create table patient(
  id INT NOT NULL AUTO_INCREMENT, 
  last_name VARCHAR(25) NOT NULL,       
  first_name VARCHAR(25) NULL,                                                  
  adress VARCHAR(50) NULL,
  both_date DATE NULL,
  phone_number INT NULL,                                                    
  sex VARCHAR(10) NULL,
  PRIMARY KEY (id)
);
  
CREATE TABLE BILL(
  id INT NOT NULL AUTO_INCREMENT, 
  creation_date DATE NULL,
  total_amount INT NULL,
  total_amount_paid INT NULL,
  PRIMARY KEY (id)
);
Create table TEST(
  id INT NOT NULL AUTO_INCREMENT,
  id_test_type INT NOT NULL,
  name_t VARCHAR(25) NOT NULL,
  description_t VARCHAR(255) NULL,
  price_t INT NULL,
  min_time_frame INT NULL,
  max_time_frame INT NULL,
  PRIMARY KEY (id)
);  
CREATE TABLE test_type(
  id INT NOT NULL AUTO_INCREMENT, 
  name_tt VARCHAR(50) NULL,
  PRIMARY KEY (id)
);
 CREATE TABLE result(
  id INT NOT NULL AUTO_INCREMENT,
  id_test INT NOT NULL,
  name_r VARCHAR(25) NULL,
  description_r VARCHAR(255) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE result_item(
  id INT NOT NULL AUTO_INCREMENT,
  id_result INT NOT NULL,
  unit VARCHAR(25) NULL,
  type_r VARCHAR(255) NULL,
  PRIMARY KEY (id)                                                
);                                                                              
CREATE TABLE bill_item(
  id INT NOT NULL AUTO_INCREMENT,         
  id_bill INT NOT NULL,
  price INT NULL,
  quantity INT NULL,
  discount INT NULL,
  description_b VARCHAR(255) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,    
  name_r VARCHAR(25) NULL,
  description_r VARCHAR(255) NULL,
  PRIMARY KEY (id) 
);
CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(20) NOT NULL,
  first_name VARCHAR(25) NULL,
  adress VARCHAR(20) NULL,
  phone_number INT NULL,
  password_u VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE user_role(
  id_user INT NOT NULL,
  id_role INT  NOT NULL,
  PRIMARY key(id_user, id_role)
);
CREATE TABLE payments(
  id INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_bill INT NOT NULL,
  date_p DATE NULL,
  amount_p INT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE sample(
  id INT NOT NULL AUTO_INCREMENT,
  id_sample_type INT NOT NULL,
  id_test_request INT NOT NULL,
  name_s VARCHAR(255) NOT NULL,
  production_date DATE NULL,
  expiration_date DATE NULL,
  PRIMARY KEY (id)
);
CREATE TABLE sample_type(
  id INT NOT NULL AUTO_INCREMENT,
  name_st VARCHAR(255) NULL,
  description_st VARCHAR(255) NULL,
  PRIMARY KEY (id)
);
-- Foreign keys definition
-- ***********************
ALTER TABLE test_result ADD CONSTRAINT fk_test_request FOREIGN KEY (id_test_request) REFERENCES test_request(id);
 

ALTER TABLE test_request ADD CONSTRAINT fk_patient FOREIGN KEY (id_patient) REFERENCES patient(id);
ALTER TABLE test_request ADD CONSTRAINT fk_bill FOREIGN KEY (id_bill) REFERENCES bill(id);
ALTER TABLE test_request ADD CONSTRAINT fk_test FOREIGN KEY (id_test) REFERENCES test(id);
ALTER TABLE test ADD CONSTRAINT fk_test_type FOREIGN KEY (id_test_type) REFERENCES test_type(id);
ALTER TABLE result ADD CONSTRAINT fk_test_result FOREIGN KEY (id_test) REFERENCES test (id);
ALTER TABLE result_item ADD CONSTRAINT fk_result FOREIGN KEY (id_result) REFERENCES result(id);
ALTER TABLE bill_item ADD CONSTRAINT fk_bill_item FOREIGN KEY (id_bill) REFERENCES bill(id);
ALTER TABLE payments ADD CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES user(id);
ALTER TABLE sample ADD CONSTRAINT fk_sample_test_request FOREIGN KEY (id_test_request) REFERENCES test_request(id);
ALTER TABLE sample ADD CONSTRAINT fk_sample_type FOREIGN KEY (id_sample_type) REFERENCES sample_type(id);
ALTER TABLE user_role ADD CONSTRAINT fk_role FOREIGN KEY (id_role) REFERENCES ROLE(id);
ALTER TABLE user_role ADD CONSTRAINT fk_user_r FOREIGN KEY (id_user) REFERENCES user(id);



 