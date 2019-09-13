(function()
{
	var days = [31,28,31,30,31,30,31,31,30,31,30,31];
	
	var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
	var selectMon;
	
	// display the selected month
	var selectedMon = document.querySelectorAll(".mon");
	selectedMon.forEach((element,indexM) => {
		element.addEventListener("click", function(){
			document.querySelector(".confirm-btn").style.display="inline-block";
			document.querySelector(".confirm-mon").style.display="block";
			document.getElementById("confirm-mon").innerHTML =  selectedMon[indexM].innerHTML; 
			selectMon=indexM;
		})
	})
	
	/*
	var febDays = document.querySelectorAll(".day28-29 span");
	for(var i=0;i<febDays.length;i++)
		febDays[i].className = febDays[i].className.replace("day-active"," ");
	febDays.forEach((element,indexD) => {
		element.addEventListener("click",function(){
			for(var i=0;i<febDays.length;i++)
				febDays[i].className = febDays[i].className.replace("day-active"," ");
			febDays[indexD].className += "day-active";
			var dayFeb = parseInt(febDays[indexD].innerHTML);
			if(dayFeb !== 28)
				days[1]=dayFeb;			
		})
	})
	*/
	
	var rowNum = 1;
	
	document.querySelector(".confirm-btn").addEventListener("click",function(){
		
		var enYear = document.querySelector(".year").value; 
		if(enYear.length === 0)
		{
			document.querySelector(".enter-year p").style.display="block";
			document.querySelector(".enter-year p").innerHTML="Please Enter Year";
		}
		else if(isNaN(enYear))
		{
			document.querySelector(".enter-year p").style.display="block";
			document.querySelector(".enter-year p").innerHTML="Invalid Entry(enter 4-digit number)";
		}
		else if(enYear.length !== 4)
		{
			document.querySelector(".enter-year p").style.display="block";
			document.querySelector(".enter-year p").innerHTML="Enter full year(4-digits)";
		}
		else
		{
			document.querySelector(".wrapper").style.display="none";
		    document.querySelector(".head").innerHTML = document.querySelector(".confirm-mon").innerHTML + " " + enYear;
		    document.querySelector(".add-table").style.display="block";
		    // display tables
			
			enYear = parseInt(enYear);
			if(enYear%4 === 0)
			{
				if(enYear%100 === 0)
				{
					if(enYear%400===0)
						days[1]=29;
				}
			}
			
			if(selectMon===0 || selectMon===2 || selectMon===4 || selectMon===6 || selectMon===7 || selectMon===9 || selectMon===11)
			{
				var week=[' '];
				for(var i=1;i<=32;i++)
				{
					var d = new Date(enYear,selectMon,i);
					week.push(weekDays[d.getDay()]);
				}
			}
			
			else if(selectMon===1)
			{
				if(days[1]===28)
				{
					var week=[' '];
					for(var i=1;i<=29;i++)
					{
						var d = new Date(enYear,selectMon,i);
						week.push(weekDays[d.getDay()]);
					}
				}
				else
				{
					var week=[' '];
					for(var i=1;i<=29;i++)
					{
						var d = new Date(enYear,selectMon,i);
						week.push(weekDays[d.getDay()]);
					}
				}
			}
			
			else
			{
				var week=[' '];
				for(var i=1;i<=31;i++)
				{
					var d = new Date(enYear,selectMon,i);
					week.push(weekDays[d.getDay()]);
				}
			}
			
		    var day31 = '<table class="tab" border="1px" cellspacing="0" cellpadding="0"><tr><th>SNo</th><th id="name">Name</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th></tr><tr class="head-row"><td class="days-head" colspan="2">DAYS OF THE WEEK</td><td>'+week[1]+'</td><td>'+week[2]+'</td><td>'+week[3]+'</td><td>'+week[4]+'</td><td>'+week[5]+'</td><td>'+week[6]+'</td><td>'+week[7]+'</td><td>'+week[8]+'</td><td>'+week[9]+'</td><td>'+week[10]+'</td><td>'+week[11]+'</td><td>'+week[12]+'</td><td>'+week[13]+'</td><td>'+week[14]+'</td><td>'+week[15]+'</td><td>'+week[16]+'</td><td>'+week[17]+'</td><td>'+week[18]+'</td><td>'+week[19]+'</td><td>'+week[20]+'</td><td>'+week[21]+'</td><td>'+week[22]+'</td><td>'+week[23]+'</td><td>'+week[24]+'</td><td>'+week[25]+'</td><td>'+week[26]+'</td><td>'+week[27]+'</td><td>'+week[28]+'</td><td>'+week[29]+'</td><td>'+week[30]+'</td><td>'+week[31]+'</td></tr></table>';
		
		    var day30 = '<table border="1px" cellspacing="0" cellpadding="0"><tr><th>SNo</th><th id="name">Name</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th></tr><tr class="head-row"><td class="days-head" colspan="2">DAYS OF THE WEEK</td><td>'+week[1]+'</td><td>'+week[2]+'</td><td>'+week[3]+'</td><td>'+week[4]+'</td><td>'+week[5]+'</td><td>'+week[6]+'</td><td>'+week[7]+'</td><td>'+week[8]+'</td><td>'+week[9]+'</td><td>'+week[10]+'</td><td>'+week[11]+'</td><td>'+week[12]+'</td><td>'+week[13]+'</td><td>'+week[14]+'</td><td>'+week[15]+'</td><td>'+week[16]+'</td><td>'+week[17]+'</td><td>'+week[18]+'</td><td>'+week[19]+'</td><td>'+week[20]+'</td><td>'+week[21]+'</td><td>'+week[22]+'</td><td>'+week[23]+'</td><td>'+week[24]+'</td><td>'+week[25]+'</td><td>'+week[26]+'</td><td>'+week[27]+'</td><td>'+week[28]+'</td><td>'+week[29]+'</td><td>'+week[30]+'</td></tr></table>';
		
		    var day28 = '<table class="tab" border="1px" cellspacing="0" cellpadding="0"><tr><th>SNo</th><th id="name">Name</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th></tr><tr class="head-row"><td class="days-head" colspan="2">DAYS OF THE WEEK</td><td>'+week[1]+'</td><td>'+week[2]+'</td><td>'+week[3]+'</td><td>'+week[4]+'</td><td>'+week[5]+'</td><td>'+week[6]+'</td><td>'+week[7]+'</td><td>'+week[8]+'</td><td>'+week[9]+'</td><td>'+week[10]+'</td><td>'+week[11]+'</td><td>'+week[12]+'</td><td>'+week[13]+'</td><td>'+week[14]+'</td><td>'+week[15]+'</td><td>'+week[16]+'</td><td>'+week[17]+'</td><td>'+week[18]+'</td><td>'+week[19]+'</td><td>'+week[20]+'</td><td>'+week[21]+'</td><td>'+week[22]+'</td><td>'+week[23]+'</td><td>'+week[24]+'</td><td>'+week[25]+'</td><td>'+week[26]+'</td><td>'+week[27]+'</td><td>'+week[28]+'</td></tr></table>';
		
		    var day29 = '<table border="1px" cellspacing="0" cellpadding="0"><tr><th>SNo</th><th id="name">Name</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th></tr><tr class="head-row"><td class="days-head" colspan="2">DAYS OF THE WEEK</td><td>'+week[1]+'</td><td>'+week[2]+'</td><td>'+week[3]+'</td><td>'+week[4]+'</td><td>'+week[5]+'</td><td>'+week[6]+'</td><td>'+week[7]+'</td><td>'+week[8]+'</td><td>'+week[9]+'</td><td>'+week[10]+'</td><td>'+week[11]+'</td><td>'+week[12]+'</td><td>'+week[13]+'</td><td>'+week[14]+'</td><td>'+week[15]+'</td><td>'+week[16]+'</td><td>'+week[17]+'</td><td>'+week[18]+'</td><td>'+week[19]+'</td><td>'+week[20]+'</td><td>'+week[21]+'</td><td>'+week[22]+'</td><td>'+week[23]+'</td><td>'+week[24]+'</td><td>'+week[25]+'</td><td>'+week[26]+'</td><td>'+week[27]+'</td><td>'+week[28]+'</td><td>'+week[29]+'</td></tr></table>';
		
		    if(selectMon===0 || selectMon===2 || selectMon===4 || selectMon===6 || selectMon===7 || selectMon===9 || selectMon===11)
				document.querySelector(".head").insertAdjacentHTML("beforeend",day31);
		    else if(selectMon===1)
		    {
				if(days[1]===28)
					document.querySelector(".head").insertAdjacentHTML("beforeend",day28);
			    else
					document.querySelector(".head").insertAdjacentHTML("beforeend",day29);
		    }
		    else
				document.querySelector(".head").insertAdjacentHTML("beforeend",day30);
		
		    document.querySelector(".add-table").addEventListener("click",function(){
				
				var row31 = '<tr class="last-row"><td>' + rowNum + '.</td><td><input type="text"></input></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td></tr>';
			
			    var row30 = '<tr class="last-row"><td>' + rowNum +'.</td><td><input type="text"></input></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td></tr>';
		
		        var row29 = '<tr class="last-row"><td>' + rowNum + '.</td><td><input type="text"></input></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td></tr>';
		
		
		        var row28 = '<tr class="last-row"><td>' + rowNum + '.</td><td><input type="text"></input></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td><td><select><option>M</option><option>E</option><option>N</option><option>G</option><option>O</option><option>CL</option><option>EL</option><option>ML</option><option>RH</option><option> </option></select></td></tr>';
			
			     var rows = document.querySelectorAll(".last-row");
		      	document.querySelector(".remove-table").style.display = "block";
			    var rowsLen = rows.length;
			    if(selectMon===0 || selectMon===2 || selectMon===4 || selectMon===6 || selectMon===7 || selectMon===9 || selectMon===11)
			    {
					if(document.querySelector(".last-row") === null)
						document.querySelector(".head-row").insertAdjacentHTML("afterend",row31);
				    else
						rows[rowsLen-1].insertAdjacentHTML("afterend",row31);
			    }
			
		        else if(selectMon===1)
		     	{
					if(days[1]===28)
				    {
						if(document.querySelector(".last-row") === null)
							document.querySelector(".head-row").insertAdjacentHTML("afterend",row28);
					    else
							rows[rowsLen-1].insertAdjacentHTML("afterend",row28);
				    }
				    else
				    {
				    	if(document.querySelector(".last-row") === null)
						    document.querySelector(".head-row").insertAdjacentHTML("afterend",row29);
					    else
							rows[rowsLen-1].insertAdjacentHTML("afterend",row29);
				    }
			    }
			    else
			    {
					if(document.querySelector(".last-row") === null)
						document.querySelector(".head-row").insertAdjacentHTML("afterend",row30);
				    else
						rows[rowsLen-1].insertAdjacentHTML("afterend",row30);
			    }
				rowNum=rowNum+1;
		    })
		}		
	})
	
	document.querySelector(".remove-table").addEventListener("click", function(){
		
		var rows = document.querySelectorAll(".last-row");
		var rowsLen = rows.length;
		
		if(rows!== null)
		{
			rows[rowsLen-1].parentNode.removeChild(rows[rowsLen-1]);
			rowNum--;
		}
	})
})();


function fun()
{
	document.querySelector(".add-table").style.display="none";
	document.querySelector(".remove-table").style.display="none";
	document.querySelector(".sign").style.display="block";
}
function fun2()
{
	document.querySelector(".add-table").style.display="block";
	document.querySelector(".remove-table").style.display="block";
	document.querySelector(".sign").style.display="none";
}
