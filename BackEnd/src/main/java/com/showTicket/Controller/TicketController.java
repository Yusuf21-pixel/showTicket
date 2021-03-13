package com.showTicket.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.showTicket.Model.UserDetails;
import com.showTicket.Repository.userRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/tickets")
public class TicketController {
   
	@Autowired
	userRepository usRp;
	
	@GetMapping("/data")
	public ResponseEntity<List<UserDetails>> getData() {
	    List<UserDetails> usersData = usRp.findAll();
	    return new ResponseEntity<List<UserDetails>>(usersData, HttpStatus.OK);
	    
	}
	
}
