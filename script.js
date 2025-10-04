window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });

// LOGIN PAGE 

// Daftar token & nama (sementara hardcode di JS)
const daftarPemilih = {
  "bsaiuU7c": "Ahmad Affandi",
  "tokencb1": "Budi Santoso",
  "tokencb2": "Citra Lestari",
  "tokencb3": "Dewi Rahmawati"
  // tinggal tambah lagi sesuai daftar
};

function ig() {
  window.location.href = "https://www.instagram.com/osimman1batam/";
 }
 
function login() {
  const token = document.getElementById("token").value;

  if (token.trim() === "") {
    document.getElementById("popupkosong").classList.add("active");
    setTimeout(() => {
      document.getElementById("kosong").classList.add("active");
    }, 50);
    setTimeout(() => {
      document.getElementById("kosong").classList.remove("active");
    }, 1500);
    setTimeout(() => {
      document.getElementById("popupkosong").classList.remove("active");
    }, 1600);
  } else {
    // cek token di daftar
    if (daftarPemilih[token]) {
      // Simpan token & nama ke localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("nama", daftarPemilih[token]);

      document.getElementById("popuphsl").classList.add("active");
      setTimeout(() => {
        document.getElementById("berhasil").classList.add("active");
      }, 50);
      setTimeout(() => {
        window.location.href = "kandidat.html";
      }, 1500);
    } else {
      document.getElementById("popupgagal").classList.add("active");
      setTimeout(() => {
        document.getElementById("gagal").classList.add("active");
      }, 50);
      setTimeout(() => {
        document.getElementById("gagal").classList.remove("active");
      }, 1500);
      setTimeout(() => {
        document.getElementById("popupgagal").classList.remove("active");
      }, 1600);
    }
  }
}





// KANDIDAT PAGE    


    function kandidat1() {
    document.getElementById("popup1").classList.add("active");
    setTimeout (() => {
      document.getElementById("kand1").classList.add("active");
    },50);      

  }

  function closePopup1() {
  document.getElementById("kand1").classList.remove("active");
  setTimeout(() => {
    document.getElementById("popup1").classList.remove("active");
  }, 500);
}

    function pilihKand1() {
  closePopup1();
  setTimeout (() => {
    window.location.href = "fixpage1.html";  
   }, 1000);    
}

    function kandidat2() {
    document.getElementById("popup2").classList.add("active");
    setTimeout (() => {
      document.getElementById("kand2").classList.add("active");
    },50);      

  }

  function closePopup2() {
  document.getElementById("kand2").classList.remove("active");
  setTimeout(() => {
    document.getElementById("popup2").classList.remove("active");
  }, 500);
}

    function pilihKand2() {
  closePopup2();
  setTimeout (() => {
    window.location.href = "fixpage2.html";  
   }, 1000); 
}


    function kandidat3() {
    document.getElementById("popup3").classList.add("active");
    setTimeout (() => {
      document.getElementById("kand3").classList.add("active");
    },50);      

  }

  function closePopup3() {
  document.getElementById("kand3").classList.remove("active");
  setTimeout(() => {
    document.getElementById("popup3").classList.remove("active");
  }, 500);
}

    function pilihKand3() {
  closePopup3();
  setTimeout (() => {
    window.location.href = "fixpage3.html";  
   }, 1000);
}

//FIX PAGE

// ===== FIX PAGE =====

function getUserData() {
  return {
    token: localStorage.getItem("token"),
    nama: localStorage.getItem("nama")
  };
}

function kirimVote(kandidat, redirectPage) {
  const { token, nama } = getUserData();

  if (!token || !nama) {
    alert("Token tidak ditemukan. Silakan login ulang!");
    window.location.href = "index.html";
    return;
  }

  // Kirim data ke proxy, tapi tidak menunggu hasilnya
  fetch("https://databasepilketos.vercel.app/api/proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, nama, kandidat }),
  }).catch(() => {
    // Kalau gagal pun tetap lanjut (supaya UX lancar)
    console.error("Gagal mengirim suara ke server");
  });

  // Langsung redirect ke halaman donepage
  window.location.href = redirectPage;
}

function pilkand1() {
  kirimVote("Kandidat 1", "donepage1.html");
}

function pilkand2() {
  kirimVote("Kandidat 2", "donepage2.html");
}

function pilkand3() {
  kirimVote("Kandidat 3", "donepage3.html");
}

function back() {
  window.location.href = "kandidat.html";
}

function awal() {
  window.location.href = "index.html";
}



      // DONEPAGE
      
window.onload = function () {
  let count = 5; 
  let countdownElement = document.getElementById("countdown");

  let timer = setInterval(function () {
    count--;
    countdownElement.textContent = count;

    if (count <= 0) {
      clearInterval(timer);
      //window.location.href = "#";
      window.location.href = "index.html"; 
    }
  }, 1000); 
};






