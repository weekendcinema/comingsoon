var PageComingSoon = function () {
    return {
      //Coming Soon
      initPageComingSoon: function () {
			var newYear = new Date();
			newYear = new Date('2017-08-25');
			$('#defaultCountdown').countdown({until: newYear})
        }
    };
}();
