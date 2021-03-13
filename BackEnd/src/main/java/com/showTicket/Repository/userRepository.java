package com.showTicket.Repository;

import java.util.List;
import  com.showTicket.Model.*;
import org.springframework.data.repository.CrudRepository;

public interface userRepository extends CrudRepository<UserDetails,Integer> {
   @Override
   List<UserDetails> findAll();
   
   public List<UserDetails> findByMailId(String mail);
   
   public UserDetails findById(int id);
}
