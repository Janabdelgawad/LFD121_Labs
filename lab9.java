// Prepare to execute a query.
  String QueryString =
     "select * from authors where lastname = ?";
  PreparedStatement pstmt = 
  connection.prepareStatement(QueryString);

  // Execute the query.
  pstmt.setString(1, search_lastname);
  ResultSet results = pstmt.executeQuery();
