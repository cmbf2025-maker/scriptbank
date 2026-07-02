import { createClient } from "@supabase/supabase-js"
import Scriptbill from "scriptbill.js"


const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

const DEFAULT_KEY   = "";

export default async function handler(req, res){
    if(req.method === "GET"){
        if(req.query.scriptbillPing){
            return res.status(200).json({
                isScriptbillServer:"TRUE"
            });
        }
        else if(req.query.notePattern){
            const obj = {
                notePattern: req.query.notePattern
            };

            if( req.query.login_time){
                obj.loginTime = req.query.login_time;
            }

            if( req.query.login_server){
                obj.loginServer = req.query.login_server;
            }
            const {data, error} = await supabase
            .from("note_pattern")
            .insert(obj);

            if(data && typeof data == "object"){
                data.reported = "TRUE";
            }

            return res.status(200).json(data);
        }
        else if(req.url.includes("mothers.json") || req.url.includes("motherKeys.json")){
            const filename = req.url.split("/").pop();

            return res.status(200).json((await fetch(req.origin + "/" + filename)).json());
        }

        else if(req.query.exchangeNote){
            const noteType = req.query.exchangeNote;
            if(req.query.noteTypeBase && req.query.noteTypeBase == "TRUE"){
                const {data, error} = await supabase
                .from("exchange_note")
                .eq("noteType", noteType)
                .first();

                if(error){
                    return res.status(500).json(error);
                }

                if(data){
                    return res.status(200).json(data);
                }

                return res.status(429).text("Can't acccess server at this time!");
            }
        }

        else if(req.query.getKEY && req.query.noteAddress ){
            const key = await Scriptbill.generateKey(20);
            const id    = await Scriptbill.generateKey();
            Scriptbill.setPublicKey(req.query.noteAddress);
            const enc = Scriptbill.encrypt(key, id);
            return res.status(200).text(enc);
        }

        else if(req.query.noteType){
            const {data, error} = await supabase
            .from("trans_block")
            .eq("noteType", req.query.noteType)
            .first();

            if( error ){
                return res.status(500).json(error);
            }

            if( data ){
                return res.status(200).json(data);
            }

            return res.status(429).text("Error fetching data");
        }

        else if(req.query.blockRef){
            const {data, error} = await supabase
            .from("trans_block")
            .eq("blockRef", req.query.blockRef)
            .first();

            if( error ){
                return res.status(500).json(error);
            }

            if( data ){
                return res.status(200).json(data);
            }

            return res.status(429).text("Error fetching data");
        }

        else if(req.query.exBlockID){
            const {data, error} = await supabase
            .from("trans_block")
            .eq("exBlockID", req.query.exBlockID)
            .first();

            if( error ){
                return res.status(500).json(error);
            }

            if( data ){
                return res.status(200).json(data);
            }

            return res.status(429).text("Error fetching data");
        }

        else if(req.query.verify_script_nonce){
            const password = req.query.verify_script_nonce;
            //just to acknoledge the script, we'll iimprove this later
            return res.status(200).json({verified:true, password:password});
        }

         else if(req.query.server && req.query.staff && req.query.type && req.query.ID ){
            const server = req.query.server;
            const staff  = req.query.staff;
            const type   = req.query.type;
            const ID     = req.query.ID;
            //just to acknoledge the script, we'll iimprove this later
            return res.status(200).json({verified:true, server, staff, type, ID });
        }

        else if(req.query.businessID || req.query.business ){
            const {data, error} = await supabase
            .from("business_managers")
            .eq("exBlockID", req.query.businessID ?? req.query.business)
            .first();

            if( error ){
                return res.status(500).json(error);
            }

            if( data ){
                return res.status(200).json(data);
            }

            return res.status(429).text("Error fetching data");
        }

        else if(req.query["paypal-acc"]){
            const {data, error} = await supabase
            .from("paypal_acc")
            .eq("walletID", req.query["paypal-acc"])
            .first();

            if( error ){
                return res.status(500).json(error);
            }

            if( data ){
                return res.status(200).json(data);
            }

            return res.status(429).text("Error fetching data");
        }

        else if(req.query.note && req.query.type){
            return res.status(500).text("not set up yet");
        }


        else if(req.query.note && req.query.account && req.query.data ){
            return res.status(500).text("not set up yet");
        }
        else if (req.query.data && req.query.reject){
            const {data: response, error} = await supabase
            .from("trans_blocks")
            .eq("blockID", req.query.reject)
            .first();

            if(error){
                return res.status(500).json(error);
            }

            if(response){
                //compare the response
                let compare = req.query.data;

                if( typeof compare == "string"){
                    try {
                        compare   = JSON.parse(compare);    
                    }
                    catch(error){
                        return res.status(500).json(error);
                    }
                }

                if( response.blockID == compare.blockID && response.noteValue == compare.noteValue && response.transValue == compare.traansValue && response.blockKey == compare.blockKey ){
                    const {data: response2, error: error2} = await supabase
                    .from("trans_blocks")
                    .delete()
                    .eq("blockID", response.blockID)
                    .select()

                    if(error){
                         return res.status(500).json(error);
                    }
                    return res.status(200).json(response2);
                }
            }
        }

        else if(req.query.defaultKey){
            return res.status(200).text(DEFAULT_KEY);
        }

        else if(req.query.staff && req.query.sBlockID){
            const staff = req.query.staff;
            const blockID = req.query.sBlockID;
            const {data: staff_data, error} = await supabase
            .from("staffs")
            .eq("staff", staff)
            .first();

            if( error ){
                return res.status(500).json(error);
            }

            if( staff_data && staff_data["scriptKey"]){
                return res.status(200).text(staff_data["scriptKey"]);
            }

            return res.status(429).text("data not found");
        }
    }
}