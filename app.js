let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alarmstuff: new Date(),
        hours:localStorage.getItem('save_hours'),
        minutes:localStorage.getItem('save_minutes'),
        seconds:localStorage.getItem('save_seconds'),
        isSet:true


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

        }


    }




});
