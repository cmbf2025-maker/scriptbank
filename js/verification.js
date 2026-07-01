

function verifyCardOtp(noteAddress, ref, OTP, walletID="", isVerified = true) {
    const client = Scriptbill.createClient();

    const channel = client.channel(noteAddress).subscribe();

    if( walletID ){
        client.channel(walletID).subscribe().send({
            type:"broadcast",
            event:"cardVerification",
            payload: {
                data:{
                    status:"success",
                    ref,
                    OTP,
                    isVerified
                }
            }
        });
    }

    channel.send({
        type:"broadcast",
        event:"cardVerification",
        payload: {
			data:{
				status:"success",
				ref,
				OTP,
                isVerified
			}
		}
    })
}