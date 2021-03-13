package com.showTicket.Model;
import javax.persistence.* ;

@Entity
@Table(name = "UserDetails")
public class UserDetails {
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private int id;
//   @Column(unique=true)
   private String mailId;
   private String movieName;
   private String showTime;
   private String date;
   private String theatre;
   private int seat;
   
   public String getTheatre() {
	 return theatre;
   }

   public void setTheatre(String theatre) {
	 this.theatre = theatre;
   }
   
	public int getSeat() {
		return seat;
	}
	
	public void setSeat(int seat) {
		this.seat = seat;
	}

	@Override
	public String toString() {
		return "UserDetails [id=" + id + ", mailId=" + mailId + ", movieName=" + movieName + ", showTime=" + showTime
				+ ", date=" + date + ", theatre=" + theatre + ", seat=" + seat + "]";
	}

	public UserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDetails(int id, String mailId, String movieName, String showTime, String date, String theatre,
			int seat) {
		super();
		this.id = id;
		this.mailId = mailId;
		this.movieName = movieName;
		this.showTime = showTime;
		this.date = date;
		this.theatre = theatre;
		this.seat = seat;
	}

	public int getId() {
		return id;
	}
	
	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getShowTime() {
		return showTime;
	}

	public void setShowTime(String showTime) {
		this.showTime = showTime;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
  
}