using System;
using System.Data.SqlClient;
public class Users {
    public int userID {get; set;}
    public string email {get; set;}
    public string password {get; set;}

    public Users(int userID, string email, string password) {
        this.userID = userID;
        this.email = email;
        this.password = password;
    }

    public void login(string email, string password){

    }


    public void createAccount(String email, String password){
        string query = "INSERT INTO users (email, password) VALUES (@Email, @Password)";
        using (DatabaseConnection db = new DatabaseConnection()){
            using (SqlCommand command = new SqlCommand(query, db.OpenConnection())){
                command.Parameters.AddWithValue("@Email", email);
                command.Parameters.AddWithValue("@Password", password);
                command.ExecuteNonQuery();
            }
        }
    }
}