alert("You spy of CI. Your mission is steal secret documents from site 19 The most secured and secret place")
alert("Choose your character:/Male/Female? Hint: Exit?")
var choose=prompt("Male/Female")
if(choose=="Female"){
	if(choose="Female"){
		alert("you meet the guard:/kill/Act/Flirt");
		var choose2=prompt("Kill/Act/Flirt");
			if(choose2=="Kill"){
				alert("you killed him");
			}else if(choose2=="Act"){
				alert("you act like scientist so he let you go");
			}else if(choose2=="Flirt"){
				alert("he fell off from shock");
			}
		alert("you saw group of heavy armed soldiers")
		var choose3=prompt("Kill/Act/Hide")
			if(choose3=="Kill"){
				alert("They stronger than you so you have been defeated.")
			}else if(choose3=="Act"){
				alert("They trusted you and let you go")
			}else if(choose3=="Hide"){
				alert("you hided between boxes")
			}
		alert("you saw manager with secret documents:Kill/Talk")
		var choose4=prompt("Kill/Talk")
			if(choose4=="Kill"){
				alert("you killed manager. You succefully escaped with document.")
			}else if(choose4=="Talk"){
				alert("you talk with him. Seems he dont care about secret documents")
				var choose5=prompt("Steal/Talk")
				if(choose5=="Steal"){
					alert("You succefully steal the document and leave site 19.")
				}else if(choose5=="Talk"){
					alert("he notice you spy so you deafeted")
				}
			}
			}else if(choose="Male"){
		alert("you meet the guard:/kill/Act/Dance");
		var choose2=prompt("Kill/Act/Dance");
			if(choose2=="Kill"){
				alert("you killed him");
			}else if(choose2=="Act"){
				alert("you act like guard. He let you go");
			}else if(choose2=="Dance"){
				alert("he dances too. So he let you go");
			}
		alert("you saw scp-049")
		var choose3=prompt("Kill/Act/Talk")
			if(choose3=="Kill"){
				alert("Scp-049 killed you")
			}else if(choose3=="Act"){
				alert("you act like scientist but he notice you lying so you died")
			}else if(choose3=="Talk"){
				alert("After the talk he let you go.")
			}
		alert("you saw manager with secret document")
		var choose4=prompt("Kill/Talk")
			if(choose4=="Kill"){
				alert("you tried to kill him but you failed. you died")
			}else if(choose4=="Talk"){
				alert("you talk with him.")
				var choose5=prompt("Steal/Ask")
				if(choose5=="Steal"){
					alert("You succefully steal the document and escape.")
				}else if(choose5=="Ask"){
					alert("he trying to stay calm but shoots at you. You wake up from your bed and realizes it was dream")
				}
			}
			}else if("Exit"){
				alert("Everything was just dream. You wake up from your bed")
			}
}