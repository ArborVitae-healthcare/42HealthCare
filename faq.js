$(document).ready(function() {
  // Add minus icon for collapse element which is open by default
  // $(".collapse.show").each(function() {
  //   $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  // });

  // Toggle plus minus icon on show hide of collapse element
  // $(".collapse").on('show.bs.collapse', function() {
  //   $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  // }).on('hide.bs.collapse', function() {
  //   $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  // });

  $(".products-btn").click(function() {
    $(".products").css({
      'display': 'block'
    });
    $(".services").css({
      'display': 'none'
    });
    $(".payment").css({
      'display': 'none'
    });
  });

  $(".services-btn").click(function() {
    $(".services").css({
      'display': 'block'
    });
    $(".products").css({
      'display': 'none'
    });
    $(".payment").css({
      'display': 'none'
    });
  });

  $(".payment-btn").click(function() {
    $(".payment").css({
      'display': 'block'
    });
    $(".services").css({
      'display': 'none'
    });
    $(".products").css({
      'display': 'none'
    });
  });
});
