package com.showTicket.Controller;

import java.io.File;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.showTicket.Model.UserDetails;
import com.showTicket.Repository.userRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	userRepository userRepo;
	
	@Autowired
	private JavaMailSender mail;
	
	@PostMapping("/register")
	public ResponseEntity<UserDetails> setUser(UserDetails user) throws MessagingException {
//		if(userRepo.findByMailId(user.getMailId()) != null) {
//			return new ResponseEntity<UserDetails>(new UserDetails(),HttpStatus.OK);
//		}
		   
		   MimeMessage obj = mail.createMimeMessage();
		   MimeMessageHelper normMail = new MimeMessageHelper(obj ,true);
	       normMail.setFrom("showticket16@gmail.com");
	       normMail.setTo(user.getMailId());
	       normMail.setSubject("Ticket confirmation");
	       String temp = (user.getSeat() == 1) ? " seat is " : " seats are ";
	       normMail.setText("Dear user,\n    This email is to confirm your booking for the " + user.getMovieName() + " movie on " + user.getDate() + ". "+ user.getSeat() +  temp +" booked at " + user.getTheatre() + " theatre for " + user.getShowTime() + " show.\n\nThanks for using showTicket.com\n\n\n\n" + "Best Regards." );
           FileSystemResource fileobj = new FileSystemResource(new File("C:\\cinema\\images\\qrCode.png")) ;
           normMail.addInline("qr",fileobj);
	       mail.send(obj);
	       userRepo.save(user);
		   return new ResponseEntity<UserDetails>(user,HttpStatus.OK);
	}
}