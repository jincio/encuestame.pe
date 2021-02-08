var st = $(window).scrollTop();
    var b = 0;

    $(window).scroll(function() {
        if (st <= 1300) {
            if (b == 0) {
                $('.counter').each(function() {
                    var $this = $(this),
                    countTo = $this.attr('data-count');

                    $({ countNum: $this.text()}).animate({
                        countNum: countTo
                        },
                        {
                        duration: 1500,
                        easing:'linear',
                        step: function() {
                        $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                        }
                    });  
                });
                b = 1;
            }else {

            }
        }else {

        }

    });