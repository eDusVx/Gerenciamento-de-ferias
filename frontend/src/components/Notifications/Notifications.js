import React from 'react'
import './style.css'

const Notifications = ()  => {
	var box  = document.getElementById('box');
	var down = false;
	
	
	function toggleNotifi(){
		if (down) {
			box.style.height  = '0px';
			box.style.opacity = 0;
			down = false;
		}else {
			box.style.height  = '510px';
			box.style.opacity = 1;
			down = true;
		}
	}
  return (
	<>
	<div class="logo"> </div>
		<div class="icon" onclick={toggleNotifi()}>
			<img src="../colaborador/bell.png" alt=""> <span>17</span></img>
		</div>
		<div class="notifi-box" id="box">
			<h2>Notificações<span> 17 </span></h2>
			<div class="notifi-item">
				<div class="text">
				   <p>@lorem ipsum dolor sit amet</p>
			    </div> 
			</div>
			<div class="notifi-item">
				<div class="text">
				   <p>@lorem ipsum dolor sit amet</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<div class="text">
				   <p>@lorem ipsum dolor sit amet</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<div class="text">
				   <p>@lorem ipsum dolor sit amet</p>
			    </div> 
			</div>

			<div class="notifi-item">
				<div class="text">
				   <p>@lorem ipsum dolor sit amet</p>
			    </div> 
			</div>

		</div>
	</>
  )
}

export default Notifications;