let theBooksIRead = [
    "harry_potter_and_the_deathly_hallows",
    "les_miserables",
    "da_vinci_code",
    "to_kill_a_mockingbird",
    "hero_of_our_time",
    "don_quixote",
    "returning_to_haifa",
    "beirut_nightmares",
    "doctor_zhivago",
    "song_of_ice_and_fire"
];

//console.log(theBooksIRead);

function generateItems() {
    let ul = document.createElement("ul");

    theBooksIRead.forEach(function (book) {
        console.log(book);

        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML += book;
    });
    document.body.appendChild(ul);
}
//generateItems();

let myBooksInformation = {
    harry_potter_and_the_deathly_hallows: {
        title: "Harry Potter and the Deathly Hallows",
        language: "English",
        author: "J. K. Rowling"
    },
    les_miserables: {
        title: "Les Miserables",
        language: "French",
        author: "Victor Hugo"
    },
    da_vinci_code: {
        title: "da vinci code",
        language: "English",
        author: "Dan Brown"
    },
    to_kill_a_mockingbird: {
        title: "To Kill a Mockingbird",
        language: "English",
        author: "Harper Lee"
    },
    hero_of_our_time: {
        title: "A Hero of Our Time",
        language: "Russian",
        author: "Mikhail Lermontov"
    },
    don_quixote: {
        title: "Don Quixote",
        language: "Spanish",
        author: "Miguel de Cervantes"
    },
    returning_to_haifa: {
        title: "Returning to Haifa",
        language: "Arabic",
        author: "Ghassan Kanafani"
    },
    beirut_nightmares: {
        title: "Beirut Nightmares",
        language: "Arabic",
        author: "Ghada al-Samman"
    },
    doctor_zhivago: {
        title: "Doctor Zhivago",
        language: "Russian",
        author: "Boris Pasternak"
    },
    song_of_ice_and_fire: {
        title: "A Song of Ice and Fire",
        language: "English",
        author: " George R. R. Martin"
    }
};

function generateBooksList() {
    let myBooksInfo = document.createElement("ul");
    document.body.appendChild(myBooksInfo);

    for (let booksId in myBooksInformation) {
        let li = document.createElement("li");
        li.setAttribute("id", booksId);
        myBooksInfo.appendChild(li);

        let b_title = document.createElement("h2");
        li.appendChild(b_title);
        b_title.innerHTML = myBooksInformation[booksId].title;

        let b_language = document.createElement("p");
        li.appendChild(b_language);
        b_language.innerHTML = myBooksInformation[booksId].language;

        let b_author = document.createElement("h4");
        li.appendChild(b_author);
        b_author.innerHTML = "by : <  " + myBooksInformation[booksId].author + "  >";
    };
}

generateBooksList();

let MyBookCovers = {
    harry_potter_and_the_deathly_hallows: "https://media.bloomsbury.com/rep/bj/9780747591061.jpg",
    les_miserables: "https://cdn6.bigcommerce.com/s-3r3dc6/products/1079/images/1775/LM-US_Window_Card__09292.1508482378.500.659.jpg?c=2",
    da_vinci_code: "https://images-eu.ssl-images-amazon.com/images/I/5171w-4D2FL.jpg",
    to_kill_a_mockingbird: "http://www.delphibooks.us/wp-content/uploads/2016/05/to-kill-a-mockingbird.jpg",
    hero_of_our_time: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/8750/9780875010496.jpg",
    don_quixote: "https://images.gr-assets.com/books/1172438149l/175850.jpg",
    returning_to_haifa: "https://images-na.ssl-images-amazon.com/images/I/51zoTIgdSjL._AC_UL320_SR224,320_.jpg",
    beirut_nightmares: "http://quartetbooks.co.uk/wp-content/uploads/beirutnightmares-480x0.jpg",
    doctor_zhivago: "https://images-na.ssl-images-amazon.com/images/I/41XBNR5FSSL.jpg",
    song_of_ice_and_fire: "https://oldtowncrier.files.wordpress.com/2017/05/last-word-2-5.jpg"
};

function bookCovers() {
    for (let j in myBooksInformation) {
        var img = document.createElement("img");
        img.setAttribute("src", MyBookCovers[j]);
        img.setAttribute("alt", j);
        let bookImg = document.getElementById(j);
        bookImg.appendChild(img);
    }
}
bookCovers();