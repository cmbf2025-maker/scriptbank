//run the advert script.
//the client experience is not disturbed
//the advert script will run every 10 minutes.
setInterval(async function(){
	
	if( ! Scriptbill.s.currentNote || ! Scriptbill.isJsonable( Scriptbill.s.currentNote ) ) return;
	
	const additions = 0.0001;
	let site 	= btoa( 'https://scriptnews.rf.gd/');
	let urls = ["https://www.highcpmgate.com/fipaaw2j?key=76c38a62e0ffe6fe5d16e5a281885942"];
	if( ! this.no ) 
		this.no = 0;
	
	else if( this.no > 4 )
		this.no = 0;
	
	let url = "https://www.highcpmgate.com/fipaaw2j?key=76c38a62e0ffe6fe5d16e5a281885942";
	this.no++;
	let obj = {};	obj.advert = true;
	obj.url = url;
	obj.parent 	= await chrome.windows.getCurrent();
	let isset 	= await chrome.runtime.sendMessage(obj);
	let note 	= JSON.parse( Scriptbill.s.currentNote );
	//console.log("isset: " + isset );
	let isOnline = navigator.onLine;
	/* try {
		// Try to fetch random data from the API. If the status code is between 
		// 200 and 300, the network connection is considered online 
		const response = await fetch(url);
		isOnline = response.status >= 200 && response.status < 300;
	} catch (error) {
		isOnline = false; // If there is an error, the connection is considered offline
	} */
	let iframe;
	
	for( let u = 0; u < urls.length; u++ ){
		url = urls[u];
		setTimeout(function(){
			let details = localStorage[ note.noteAddress.slice(0,12) + "_mining_set" ];
			let obj 	= {};
			
			if( ! details ){
				//setting it by default
				localStorage[note.noteAddress.slice(0,12) + "_mining_set" ] = "TRUE";
				obj[ note.noteAddress.slice(0,12) + "_mining_set" ]			= "TRUE";
				chrome.storage.local.set( obj );
			} else if( details == "FALSE" ){
				obj[ note.noteAddress.slice(0,12) + "_mining_set" ]			= "FALSE";
				chrome.storage.local.set( obj );
			}
			else if( details == "TRUE" ){
				obj[ note.noteAddress.slice(0,12) + "_mining_set" ]			= "TRUE";
				chrome.storage.local.set( obj );
			}
			
			if( !! isOnline ) return;
			
			/* chrome.storage.local.get( accID.slice(0,12) + "_mining_set", function(details ){
				if( ! details[accID.slice(0,12) + "_mining_set"] ){
					chrome.storage.local.set({[accID.slice(0,12) + "_mining_set"]: "TRUE"});
				}
			}); */
			
			iframe 	= document.createElement("iframe");
			iframe.src = url;
			iframe.setAttribute("class", "advert_placement");
			iframe.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin");
			iframe.setAttribute("allow", "none");
			iframe.style.display = "none";
			iframe.parent = null;
			iframe.addEventListener('load', async function(event){
				if( event.type == "load" ){
					console.log("Loaded");
					let status = event.target.status;
					
					if( status >= 200 && status <= 300 ){
						let value = Scriptbill.l[ note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings" ];
						
						if( ! value ) 
							value = 0;
						else
							value = parseFloat( value );
						
						url = chrome.runtime.getURL("exRate.json");
						let data 	= await fetch(url).catch( error =>{/*console.log( error );*/ } );
						data 		= data.status >= 200 && data.status < 300 ? await data.json().catch( error =>{/*console.log( error);*/ return false}): false;
						
						if( ! data ) return false;
						
						let testType 	= note.noteType.slice(0, note.noteType.lastIndexOf("CRD"));
						
						if( ! data.rates[ testType ] ) return false;
						
						let val			=  data.rates[ testType ];
						value 			+= additions * val;
						Scriptbill.l[ note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings" ] = value;
						let nonce 							= await Scriptbill.getData('getTransNonce', 'TRUE', SERVER );
				
						if( nonce && nonce.length == 24 ){
							Scriptbill.l.depositInstance 	= nonce;
						}
					}
				} else {
					console.log("Not Loaded");
				}
			});
			document.body.appendChild( iframe );
		}, 500, url, isOnline);
				
	}
	let iframes = document.querySelectorAll(".advert_placement");
	
	if( iframes.length > 10 ){
		for( let u = 0; u < ( iframes.length - 10 ); u++ ){
			iframe 		= iframes[u];
			iframe.remove();
		}
	}	
}, 60000);

let runPayment = async ( Scriptbill )=>{
	console.log("Paying....");
	try {
		console.log("trying....", Scriptbill.s.currentNote);
		let url  	= SERVER;
		
		if( ! Scriptbill.s.currentNote || ! Scriptbill.isJsonable( Scriptbill.s.currentNote ) ) return false;
		
		console.log("trueing....");
		
		let note 		= JSON.parse( Scriptbill.s.currentNote );		
		let value 		= parseFloat( Scriptbill.l[ note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings" ] );	
		let earnings 	= await chrome.storage.local.get( note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings");
		earnings 		= earnings[note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"];
		
		if( isNaN( value ) && ! earnings ) {
			setTimeout(async ()=>{
				await runPayment( Scriptbill );
			}, 300000);
			return false;
		}		
		
		if( earnings ){
			if( isNaN( value ) )
				value = 0;
			
			value 		+= parseFloat( earnings );
			
		}
		
		console.log("earning...." + value );
		
		//to avoid repeatative asking of trans key to make deposits
		//if( ! Scriptbill.s[ transKEEY ] ) return false;
				
		if( !navigator.onLine ){
					
			Scriptbill.isExchangeDeposit 		= true;
			Scriptbill.exchangeKey 				= EXCHANGEKEY;
			Scriptbill.passwordKey 				= Scriptbill.s[ transKEEY ];
			let nonce 							= Scriptbill.l.depositInstance;
			
			Scriptbill.depositInstance 			= nonce ? nonce:"";
			Scriptbill.depositInstanceKey 		= "ADVERTPAYMENT";
			Scriptbill.depositServer 			= note.noteServer;
			Scriptbill.depositType 				= "AUTO";
			Scriptbill.depositRequestType 		= "GET";
			Scriptbill.depositBody 				= false;
			Scriptbill.defaultAgree.agreeType 	= "ADVERT";
			Scriptbill.defaultAgree.value 		= 0;
			
			if( Scriptbill.l.lastAgreeID && ! Scriptbill.s.advertAgreeID )
				Scriptbill.s.advertAgreeID 		= Scriptbill.l.lastAgreeID;
			
			console.log("depositing..");
			Scriptbill.depositFiat( value, note.noteType ).then( async deposited =>{
				console.log("deposited..", JSON.stringify( deposited ) );
				if( deposited && deposited.transBlock && deposited.transBlock.blockID && deposited.transBlock.transType == "DEPOSIT" ){
					delete Scriptbill.l[ note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings" ];
					await chrome.storage.local.remove( note.noteAddress.slice(0,12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings");
				}
				if( document.getElementById("noteValue"))
					setAccountRank();
				
				setTimeout(async ()=>{
					await runPayment( Scriptbill );
				}, 60000);
			});
			
			/* Scriptbill.details = JSON.parse( JSON.stringify( Scriptbill.defaultBlock ) );
			Scriptbill.details.transType = "DEPOSIT";
			Scriptbill.details.transValue = value * val;						
			Scriptbill.generateScriptbillTransactionBlock(); */
			
		}
	} catch( e ){
		console.log( e.toString() );
	}
};
setTimeout(async ()=>{await runPayment(Scriptbill);}, 30000);