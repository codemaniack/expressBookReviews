let books = {
      1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
      2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
      3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
      4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
      5: {
            "author": "Unknown",
            "title": "The Book Of Job",
            "reviews": {
              1: {
                "reviewer": "John Doe",
                "rating": 5,
                "comment": "A timeless exploration of suffering and faith."
              },
              2: {
                "reviewer": "Jane Smith",
                "rating": 4,
                "comment": "A poetic and thought-provoking book with deep philosophical insights."
              }
            }
          },
      6: {
            "author": "Unknown",
            "title": "One Thousand and One Nights",
            "reviews": {
              1: {
                "reviewer": "Ali Baba",
                "rating": 5,
                "comment": "A mesmerizing collection of tales filled with magic and adventure!"
              },
              2: {
                "reviewer": "Scheherazade",
                "rating": 4.5,
                "comment": "Captivating stories that bring ancient Arabian culture to life."
              },
              3: {
                "reviewer": "Ella Fitzgerald",
                "rating": 4,
                "comment": "Some stories are repetitive, but the richness of imagination makes up for it."
              }
            }
          },
      7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
      8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
      9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
      10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

module.exports=books;
