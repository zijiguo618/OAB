package com.example.demo.reporsitory;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.utilities.Registration;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
//@Repository
public interface RegistrationRepository extends CrudRepository<Registration, Long> {
	List<Registration> findByFullname(String fullname);
	List<Registration> findAll();
	Registration findByEmail(String email);
	
}
