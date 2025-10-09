$('.live_slider_mail').slick({
  slidesToShow: 2.5,       // Show 2.5 slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: false,         // Optional: set false if you don’t want looping
  arrows: false,           // Optional
});
$('.profile_hero_slider').slick({
  centerMode: true,
  centerPadding: '30px', // দুই পাশে কতটুকু দেখা যাবে
  slidesToShow: 1,        // একবারে ১টা slide পুরো দেখা যাবে
  arrows: false,           // চাইলে true করতে পারো
  dots: false,              // নিচে dot চাইলে রাখো
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
});
document.querySelector(".status_edit_popup_btn").addEventListener("click", () => {
  document.querySelector(".status_edit_popup_overlay").style.display = "block";
  document.querySelector(".status_edit_popup_box").style.display = "block";
});

document.querySelector(".status_edit_popup_overlay").addEventListener("click", () => {
  document.querySelector(".status_edit_popup_overlay").style.display = "none";
  document.querySelector(".status_edit_popup_box").style.display = "none";
});


$(document).ready(function(){
	progress_bar();
});

function progress_bar() {
	var speed = 30;
	var items = $('.progress_bar').find('.progress_bar_item');
	
    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
		
        var count = setInterval(function(){
            if(i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr+'%'
                });
                value.find('.item_value').html(iStr +'%');
            }
            else {
                clearInterval(count);
            }
            i++;
        },speed);
    });
}


 function showRewardPopupX99() {
      const popup = document.getElementById('rewardPopupX99');
      const overlay = document.getElementById('popupOverlayX99');

      overlay.classList.add('active');
      popup.classList.add('active');

      setTimeout(() => {
        popup.classList.add('show');
      }, 10);
    }

    function closeRewardPopupX99() {
      const popup = document.getElementById('rewardPopupX99');
      const overlay = document.getElementById('popupOverlayX99');

      popup.classList.remove('show');

      setTimeout(() => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
      }, 300); // match transition duration
    }

