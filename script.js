if (window.location.href.endsWith('index.html') || window.location.href.endsWith('homepage2.html')) {
    // mengambil element melalui id
    const contentWrap = document.getElementById('content');

        // array of object sebagai acuan data yang akan di assign ke dalam
    const dataItem = [
        {
            images: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
        {
            images: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
        {
            images: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
        {
            images: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
        {
            images: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
    ];

    dataItem.forEach ((item) => {
        const contentGrid = document.createElement('div');
    contentGrid.className = 'content-grid';
    contentWrap.appendChild(contentGrid);

    const contentHov = document.createElement('div');
    contentHov.className = 'content-hov';
    contentGrid.appendChild(contentHov);

    const image = document.createElement('div');
    image.className = 'img';
    contentHov.appendChild(image);

    const img = document.createElement('img');
    img.src = item.images;
    img.alt = 'movie-bw';
    image.appendChild(img);

    const description = document.createElement('div');
    description.className = 'description';
    contentHov.appendChild(description);

    const dscOne = document.createElement('div');
    dscOne.className = 'dsc1';
    description.appendChild(dscOne);

    const paragraph = document.createElement('p');
    paragraph.textContent = item.movieName;
    dscOne.appendChild(paragraph);

    const dscTwo = document.createElement('div');
    dscTwo.className = 'dsc2';
    description.appendChild(dscTwo);

    const parag = document.createElement('p');
    parag.textContent = item.genreName;
    dscTwo.appendChild(parag);

    const btnDesc = document.createElement('div');
    const btndesc = document.createElement('button');
    btnDesc.className = 'btn-dsc';
    btndesc.textContent = 'details';
    btnDesc.appendChild(btndesc);
    description.appendChild(btnDesc);

    btndesc.addEventListener('click', () => {
        window.location = item.aLink;
    });
    });
    
    const upcomingWrap = document.getElementById('upcoming-content');

    const item = [
        {
            pictures: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
        {
            pictures: './asset/assets/tenet-movie.png',
            movieName: 'Tenet',
            genreName: 'Action, Sci-Fi',
            aLink: './moviedetails.html'
        },
        {
            pictures: './asset/assets/movie-bw.png',
            movieName: 'Black Widow',
            genreName: 'Action, Adventure, Sci-Fi',
            aLink: './moviedetails.html'
        },
        {
            pictures: './asset/assets/witches-movie.png',
            movieName: 'The Witches',
            genreName: 'Adventure, Comedy, Family',
            aLink: './moviedetails.html'
        },
        {
            pictures: './asset/assets/movie-bw.png',
            movieName: 'Black Widow',
            genreName: 'Action, Adventure, Sci-Fi',
            aLink: './moviedetails.html'
        },
        {
            pictures: './asset/assets/movie-bw.png',
            movieName: 'Black Widow',
            genreName: 'Action, Adventure, Sci-Fi',
            aLink: '/moviedetails.html'
        },
    ]

    item.forEach((data) => {
        
    const contentEl = document.createElement('div');
    contentEl.className = 'content-up-coming';
    upcomingWrap.appendChild(contentEl);

    const pict = document.createElement('div');
    pict.className = 'picture';
    contentEl.appendChild(pict);

    const img = document.createElement('img');
    img.src = data.pictures;
    img.alt = 'movie-pict';
    pict.appendChild(img);

    const descOne = document.createElement('div');
    descOne.className = 'dsc1';
    descOne.textContent = data.movieName;
    contentEl.appendChild(descOne);

    const descTwo = document.createElement('div');
    descTwo.className = 'dsc2';
    descTwo.textContent = data.genreName;
    contentEl.appendChild(descTwo);

    const btnDsc = document.createElement('div');
    btnDsc.className = 'btn-dsc';
    contentEl.appendChild(btnDsc);

    const btn = document.createElement('button');
    btn.textContent = 'Details';
    btnDsc.appendChild(btn);
    
    btn.addEventListener('click', () => {
        window.location = data.aLink;
    });

    });
} else if(window.location.href.endsWith('signin.html')) {
    // mengambil sebuah element melalui id
    const alertElm = document.getElementById('alert-login');
    const formLogin = document.getElementById('form-login');

    // melakukan validasi ketika submit
    formLogin.addEventListener('submit', (event) => {
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        
        // kondisi dalam validasi
        if(event.target.email.value === "admin@tickitz.com" && event.target.password.value === "1234") {
            alertElm.innerHTML = '';
            alertElm.prepend("Login Sukses");
            alertElm.append(closeBtn);
            alertElm.setAttribute('class', 'alert-login');
            alertElm.style.display = 'flex';
            closeBtn.style.marginLeft = '10px';
            setTimeout(() => {
                window.location = '/index.html';
            }, 3000)
        }else {
            alertElm.innerHTML = '';
            alertElm.prepend("Login Gagal");
            alertElm.append(closeBtn);
            alertElm.setAttribute('class', 'alert-warning');
            alertElm.style.display = 'flex';
            closeBtn.style.marginLeft = '10px';
        }
        // validasi untuk button close
        closeBtn.addEventListener('click', () => {
        alertElm.style.display = 'none';
    });

        event.preventDefault();
    });
}

