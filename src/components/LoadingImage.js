//** *************************  HTML FOR LOADING IMAGE */

<body>
<div class="loading-image">
  <img src="./styles/spartan.png" alt="spartan image">
</div>


//** ************************* CSS STYLING FOR LOADING IMAGE */
.loading-image {
  position: relative;
  float: left;
  height: 100%;
  width: 955px;
  overflow: hidden;
  -webkit-animation: reveal 4s ease;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes reveal {
  0%   {width: 0px;}
  100% { width: 100%;}
}
@keyframes reveal {
  0%   {width: 0px;}
  100% { width: 100%;}
} 