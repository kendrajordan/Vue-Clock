let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alarmstuff: new Date(),
        hours:localStorage.getItem('save_hours'),
        minutes:localStorage.getItem('save_minutes'),
        seconds:localStorage.getItem('save_seconds'),
        isSet:true,
        setDate:'',
        countdownStuff:''

    },

    created: function () {

        let self = this;
        self.clockstuff = self.setTime();

        setInterval(function() {
            self.clockstuff = self.setTime();
        }, 1000);

},


    methods: {

        setTime: function () {

            let now = new Date();

            let hours = now.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }

            let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let seconds = now.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            return hours + ':' + minutes + ':' + seconds;

        },
        setAlarm:function(){
          //let alarmItems = [];
          localStorage.setItem('save_hours',this.hours);
          localStorage.setItem('save_minutes',this.minutes);
          localStorage.setItem('save_seconds',this.seconds);

          this.alarmstuff.setHours(this.hours,this.minutes,this.seconds);
           let millialarm = Date.parse(this.alarmstuff);

           let now = new Date();
           let timer = now.getTime();
           /*let Hours = now.getHours();
           if (Hours < 10) {
               Hours = '0' + Hours;
           }

           let Minutes = now.getMinutes();
           if (Minutes < 10) {
               Minutes = '0' + Minutes;
           }

           let Seconds = now.getSeconds();
           if (Seconds < 10) {
               Seconds = '0' + Seconds;
           }*/
           //now.setHours(Hours,Minutes,Seconds);
           //let millinow = Date.parse(now);
          // let remainder = millialarm - millinow;
          let timerremainder = millialarm-timer;
          if(millialarm > timer){
           setTimeout(function(){
              document.getElementById('xyz').play(); document.getElementById('time').innerHTML='Time is Up';},timerremainder);
              this.isSet=true
            }
          else{
            this.isSet=false;

          }

        },
        countdownTimer:function(){

          // Set the date we're counting down to
          let countDownDate = new Date(this.setDate).getTime();

          // Update the count down every 1 second
            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

                        if (distance < 0){

                      return 'EXPIRED';

                    }
                    else{
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
           return days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
         }

        },

        display:function(){
          setInterval(()=>this.countdownStuff = this.countdownTimer(),1000);

        }

}

});
