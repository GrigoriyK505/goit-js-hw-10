import"./assets/styles-DAkrmrk6.js";import{f as S,a as l}from"./assets/vendor-BemqtjYU.js";const s=document.querySelector("[data-start]"),a=document.querySelector("#datetime-picker"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let u,d;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];if(t<=new Date){l.error({title:"Error",message:"Please choose a date in the future"}),s.disabled=!0;return}u=t,s.disabled=!1}};S(a,p);s.addEventListener("click",()=>{u&&(C(),a.disabled=!0,s.disabled=!0)});function C(){d=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(d),a.disabled=!1,i({days:0,hours:0,minutes:0,seconds:0}),l.success({title:"Complete",message:"Countdown finished!"});return}const n=D(t);i(n)},1e3)}function D(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function r(e){return String(e).padStart(2,"0")}function i({days:e,hours:t,minutes:n,seconds:c}){o.days.textContent=r(e),o.hours.textContent=r(t),o.minutes.textContent=r(n),o.seconds.textContent=r(c)}
//# sourceMappingURL=1-timer.js.map
