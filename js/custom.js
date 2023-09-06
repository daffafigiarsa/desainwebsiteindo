// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// // nice select
// $(document).ready(function () {
//     $('select').niceSelect();
// });

  $(document).ready(function() {
    $('.select2').select2({
      dropdownAutoWidth: true,
      maximumSelectionLength: 2 // Ganti dengan jumlah yang Anda inginkan
    });
  });









// $(window).scroll(function() {
//     if ($(this).scrollTop() > 80) {
//       $('.navbar').addClass('navbar-scroll');
//     } else {
//       $('.navbar').removeClass('navbar-scroll');
//     }
//   });

//   // Tambahkan event handler untuk mengubah warna navbar saat tombol toggler diklik
//   $('.navbar-toggler').on('click', function() {
//     $('.navbar').toggleClass('navbar-mobile-scroll');
//   });