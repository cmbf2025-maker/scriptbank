

// Declare chrome and browser variables
//const chrome = window.chrome
//const browser = window.browser || chrome

/* console.log('>>> added listeners'); */


self.onmessage = async (event) => {
  const message = event.data

  // 2. A page requested user data, respond with a copy of `user`
  console.log(message, typeof message)

  if (typeof message == "string") {
    if (message == "get-checkout-data") {
      chrome.storage.session.get("checkout", (checkout) => {
        self.postMessage({})
        if (checkout.checkout) self.postMessage(JSON.parse(checkout.checkout))
        else {
          self.postMessage({})
        }
      })
    } else if (message === "get-current-note") {
      const note = await chrome.storage.session.get("currentNote")

      if (note.currentNote) self.postMessage({ currentNote: JSON.parse(note.currentNote) })
      else self.postMessage({ currentNote: {} })
    }
  } else if (typeof message == "object") {
    console.log("message object: " + JSON.stringify(message))
    if (message.setCheckout) {
      //localStorage.checkout = JSON.stringify( message.setCheckout );
      chrome.storage.session.set({ checkout: message.setCheckout })
      self.postMessage(true)
    } else if (message.setCurrentNote) {
      //sessionStorage.currentNote = JSON.stringify( message.setCurrentNote );
      chrome.storage.session.set({ currentNote: JSON.stringify(message.setCurrentNote) })
      self.postMessage(true)
    } else if (message.checkout && message.url) {
      const INTERVAL = 2000
      setTimeout(() => {
        chrome.tabs.create({ url: message.url, active: false }, (tab) => {
          const interval = setInterval(async () => {
            const urlType = new URL(message.url)
            const msg = await browser.tabs.sendMessage(tab.id, { checkout: "isCheckedOut", type: urlType.origin })

            if (msg && msg.confirm) {
              chrome.tabs.remove(tab.id)
              clearInterval(interval)
              self.postMessage({ ischeckout: true, type: urlType.origin })
            } else if (msg && !msg.confirm) {
              chrome.tabs.remove(tab.id)
              clearInterval(interval)
              self.postMessage({ ischeckout: false, type: urlType.origin })
            }
          }, INTERVAL)
        })
      }, INTERVAL)
    } else if (message.advert && message.url) {
      const INTERVAL = 60000
      let adsTabs = await chrome.storage.session.get("adverts_tabs")
      adsTabs = adsTabs.adverts_tabs
      console.log(adsTabs)
      if (adsTabs) {
        adsTabs = JSON.parse(adsTabs)
        adsTabs.forEach(async (ads, index) => {
          const time = Date.now()
          const test = 30000
          const result = time - ads.time
          const tab = await chrome.tabs.get(ads.id)

          if (result >= test && tab && tab.id && !tab.active) {
            let pendingUrls = await chrome.storage.session.get("PENDINGADS")

            if (pendingUrls.PENDINGADS) {
              pendingUrls = JSON.parse(pendingUrls)
              const url = pendingUrls[0]
              chrome.tabs.update(ads.id, {
                active: false,
                autoDiscardable: true,
                url: url,
              })
              addEarnings(0.0001)
              pendingUrls.splice(0, 1)
              chrome.storage.session.set({ PENDINGADS: JSON.stringify(pendingUrls) })
              adsTabs[index] = { id: ads.id, time: Date.now(), index: ads.index }
              chrome.storage.session.set({ adverts_tabs: JSON.stringify(adsTabs) })
            }
          } else if (!tab || !tab.id) {
            adsTabs.splice(index, 1)
            chrome.storage.local.set({ adverts_tabs: JSON.stringify(adsTabs) })
          }
        })
      }
      setTimeout(async () => {
        console.log("Something")
        //first check if the code is running on a mobile platform.
        const userA = navigator.userAgentData
        const isOnline = navigator.onLine
        if (userA.mobile || userA.platform == "Android" || true) {
          const tabs = await chrome.tabs.query({ currentWindow: true })
          if (adsTabs) {
            try {
              const time = Date.now()
              let target = 180000,
                result = 0
              if (adsTabs.length > 5) {
                adsTabs.forEach(async (ads, index) => {
                  tabs.map(async (tab) => {
                    if (tab.id == ads.id) {
                      console.log("True, found, " + ads.id)
                      result = time - ads.time

                      if (result > target && !tab.active) {
                        try {
                          chrome.tabs.remove(tab.id)
                          adsTabs.splice(index, 1)
                          chrome.storage.session.set({ adverts_tabs: JSON.stringify(adsTabs) })
                        } catch (e) {}
                      }
                    } else {
                      console.log("Not found " + ads.id)
                    }
                  })
                })
              } else {
                console.log("Lesser")
              }
            } catch (e) {
              console.log(e)
            }
          } else {
            adsTabs = []
          }

          if (isOnline) {
            if (adsTabs.length <= 5) {
              const tab = await chrome.tabs.create({
                active: false,
                url: message.url,
              })
              adsTabs.push({ id: tab.id, time: Date.now(), index: tab.index })
              chrome.storage.session.set({ adverts_tabs: JSON.stringify(adsTabs) })
              addEarnings(0.0001)
            } else {
              let pendingUrls = await chrome.storage.session.get("PENDINGADS")

              if (pendingUrls.PENDINGADS) pendingUrls = JSON.parse(pendingUrls.PENDINGADS)
              else pendingUrls = []

              pendingUrls.push(message.url)
              chrome.storage.session.set({ PENDINGADS: JSON.stringify(pendingUrls) })
            }
          }
        }
      }, INTERVAL)
      self.postMessage(true)
    } else if (message.dataMes && message.clients && message.dataIntent == "shareData") {
      const response = JSON.parse(message.dataMes)
      const servers = JSON.parse(message.clients)
      const scriptbill_server = message.defaultServer
      let note = message.note

      console.log("SERVER: ", scriptbill_server)

      if (typeof note == "string" && isJsonable(note)) note = JSON.parse(note)

      //chrome.storage.session.set({currentNote: JSON.stringify( note )});

      if (response && response.blockID && response.exchangeNote && response.exchangeNote.exchangeKey) {
        console.log("sharing response: ", response.blockID )
        if (!servers.includes(scriptbill_server)) servers.splice(0, 0, scriptbill_server)

        if (note && !servers.includes(note.noteServer)) servers.splice(1, 0, note.noteServer)

        if (!servers.includes(response.exchangeNote.noteServer)) servers.splice(2, 0, response.exchangeNote.noteServer)

          servers.forEach((server)=>{
            const url    = new URL(server)
            runWebsocket(response, url.href)
          })
          
          return
		
		  const returnData = async (data, x, datas, streamKey, serverKey, url, y) => {
			data = datas[x];
			ret = await getData(
				["streamKey", "blockData", "num", "serverKey"],
				[streamKey, data, x, serverKey],
				url.href,
			)
			console.log("note server self sending: " + x + " times " + response.blockID, JSON.stringify(ret))

			if (!ret) {
				x -= 1
				if (!y) y = 0
				y++

				if (y == 10) return
			} else if (ret.num) {
				ret = await getData(
				["streamKey", "blockData", "num", "serverKey"],
				[streamKey, datas[ret.num], ret.num, serverKey],
				url.href,
				)
				console.log(
				"note server self sending: " + ret.num + " times " + response.blockID,
				JSON.stringify(ret),
				)
				return ret
			} else {
				return ret
			}

			return returnData(data, x, datas, streamKey, serverKey, url, y)
		}

        //as a priority
        if (note && (note.blockID == response.blockID || message.runPersistently)) {
          let datas = chunk_data(JSON.stringify(response)),
            ret
          const streamKey = generateKey(15)
          let url = new URL(note.noteServer)
          console.log("server url: " + url.href)
          const serverKey = url.pathname.replaceAll("/", "")

          ret = await getData("scriptbillPing", "true", url.origin)

          if (!ret || !ret.isScriptbillServer) {
            url = new URL(scriptbill_server)
          }

		 

          
          
            await Promise.all(
              datas.map((data, x) => {              
                  return returnData(data, x, datas, streamKey, serverKey, url)             
              })
            )
          
          ret = await getData(
            ["streamKey", "blockData", "serverKey", "currentBlock"],
            [streamKey, "STOP", serverKey, note.blockID],
            url.href,
          )
          console.log("note server self stopping: " + response.blockID, JSON.stringify(ret))         
          

          if (!ret.isGet) {
            self.postMessage({ runBlock: ret.nextBlock })
          }

          if (ret.agreeSign && note.blockID == response.blockID && ret.password) {
            self.postMessage({
              createRequest: true,
              block: JSON.parse(JSON.stringify(response)),
              password: ret.password,
            })
          }

          /* if( this.sendChannel ){
					  this.sendChannel.send( JSON.stringify( response ) ); 
				  } */
        }

        const limit = 12,
          i = 0

        const serverPromises = servers.map((server) =>
          (async () => {
            try {
              console.log("Check Data Server: ", server)
              const datas = chunk_data(JSON.stringify(response))
              console.log("datas: ", datas )

              if (!limit || !navigator.onLine) return

              const url = new URL(server)
              const check = await getData("blockID", response.blockID, url.href)

              if (check && check.blockID) return

              console.log("server url: " + url.href)
              let serverKey = url.pathname.replaceAll("/", "")
              let streamKey = generateKey(15)

              if (!serverKey) serverKey = note.noteAddress.slice(0, 24).replaceAll("/", "")

              if (serverKey && !serverKey.includes("/")) {
                let ret

                await Promise.all(datas.map((data, x) => {
                  return returnData(data, x, datas, streamKey, serverKey, url)                  
                }))

                /*for (let x = 0, y = 0; x < data.length; x++) {
                  if (x < 0) x = 0

                  ret = await getData(
                    ["streamKey", "blockData", "num", "serverKey"],
                    [streamKey, data[x], x, serverKey],
                    url.href,
                  )
                  console.log("data gotten: " + JSON.stringify(ret))

                  if (!ret) {
                    return
                  } else if (ret.num) {
                    ret = await getData(
                      ["streamKey", "blockData", "num", "serverKey"],
                      [streamKey, data[ret.num], ret.num, serverKey],
                      url.href,
                    )
                    console.log(
                      "note server self sending: " + ret.num + " times " + response.blockID,
                      JSON.stringify(ret),
                    )
                  }
                } */

                  ret = await getData(["streamKey", "blockData", "serverKey"], [streamKey, "STOP", serverKey], url.href)
                  console.log("note server stopping: " + response.blockID, JSON.stringify(ret))
                  if (ret.agreeSign) {
                    self.postMessage({ createAgreementReq: true, blockID: ret.block.blockID, password: ret.password })
                  }

                
              } else {
                streamKey = generateKey()
                const recipientData = response.recipient
                const exchangeNoteData = JSON.stringify(response.exchangeNote)
                const agreementData = JSON.stringify(response.agreement)
                const noteAgreements = JSON.stringify(response.agreements)
                let data = JSON.parse(JSON.stringify(response))

                delete data.agreements
                delete data.agreement
                delete data.recipient
                delete data.exchangeNote

                data = JSON.stringify(data)

                let x
                let response1 = await getData(["blockData", "streamKey"], [data, streamKey], url.href)
                console.log("data gotten: " + JSON.stringify(response1))
                if (response1 && typeof response1 == "object" && response1.recieved == "true") {
                  data = agreementData
                  response1 = await getData(
                    ["blockData", "agreeData", "streamKey"],
                    ["TRUE", data, streamKey],
                    url.href,
                  )
                  console.log("data gotten: " + JSON.stringify(response1), "key: " + streamKey)
                  if (response1 && typeof response1 == "object" && response1.recieved == "true") {
                    let agrees = JSON.parse(noteAgreements),
                      agreeID
                    for (agreeID in agrees) {
                      data = JSON.stringify(agrees[agreeID])
                      response1 = await getData(
                        ["blockData", "agreeData", "streamKey", "noteAgree"],
                        ["TRUE", data, streamKey, "TRUE"],
                        url.href,
                      )
                      console.log("data gotten: " + JSON.stringify(response1), "key: " + streamKey)
                    }
                    data = exchangeNoteData
                    response1 = await getData(
                      ["blockData", "exchangeData", "streamKey"],
                      ["TRUE", data, streamKey],
                      url.href,
                    )
                    console.log("data gotten: " + JSON.stringify(response1), "key: " + streamKey)
                    if (response1 && typeof response1 == "object" && response1.recieved == "true") {
                      if (recipientData) {
                        data = recipientData
                        response1 = await getData(
                          ["blockData", "repData", "streamKey"],
                          ["STOP", data, streamKey],
                          url.href,
                        )
                      } else {
                        data = "EMPTY RECIPIENT"
                        response1 = await getData(
                          ["blockData", "repData", "streamKey"],
                          ["STOP", data, streamKey],
                          url.href,
                        )
                      }
                      console.log("data gotten: " + JSON.stringify(response1), "key: " + streamKey)
                    }
                  }
                }
              }
            } catch (e) {
              console.log("no data gotten " + e)
              return false
            }
          })(),
        )

        // Wait for all server promises to complete
        await Promise.all(serverPromises)
      }
    } else if (message.latest && message.streamKey && message.time && message.noteServer) {
      let url = new URL(message.noteServer)
      const ret = await getData("scriptbillPing", "true", message.noteServer)
      const streamKey = url.pathname.replaceAll("/", "")

      if (!ret || !ret.isScriptbillServer) url = new URL(message.defaultServer)

      const response = await getData(
        ["streamKey", "latest", "time"],
        [message.streamKey, message.latest, message.time],
        url.origin,
      )
      if (response) self.postMessage(response)
      else self.postMessage("Not a Response")
    } else if (message.response && message.server && message.note) {
      let response = await getData("response", "true", message.server)

      if (response) self.postMessage({ responseKey: response })
      else {
        response = await getData("response", "true", message.defaultServer)
        if (response) self.postMessage({ responseKey: response })
        else self.postMessage({ responseKey: "Not a Response" })
      }
    } else if (message.currentBlock && message.noteServer) {
      const ping = await getData("scriptbillPing", "true", message.noteServer)

      if (!ping || !ping.isScriptbillServer) message.noteServer = message.defaultServer

      const response = await getData("currentBlock", "true", message.noteServer)
      if (response && response.blockID) self.postMessage(response)
      else self.postMessage("Not a Response")
    } else if (message.userAgent && message.data) {
      let note = await chrome.storage.session.get("currentNote")

      if (note && isJsonable(note)) {
        note = JSON.parse(note)
        const response = await getData(
          ["userAgent", "data", "noteAdd"],
          [message.userAgent, JSON.stringify(message.data), message.noteID],
          message.noteServer,
        )

        if (response && message.value && response.server) {
          if (response.server != message.data.server || response.name == "NOT FOUND")
            self.postMessage({ payOutDividend: message.value, password: message.password, key: message.key })
        }
        chrome.storage.session.set({ currentNote: JSON.stringify(note) })
      }
    } else if (message.earnings && message.minedKey) {
      addEarnings(message.earnings)
    } else if (message.getEarnings) {
      chrome.storage.session.get("currentNote", (currentNote) => {
        let note = false

        if (currentNote.currentNote && isJsonable(currentNote.currentNote)) note = JSON.parse(currentNote.currentNote)

        if (note && note.noteAddress) {
          chrome.storage.local.get(
            note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings",
            (earning) => {
              let value = 0

              if (
                earning &&
                earning[note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"]
              ) {
                value = Number.parseFloat(
                  earning[note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"],
                )

                if (isNaN(value)) value = 0
              }

              self.postMessage({ advertEarnings: value, note: note.noteAddress, noteType: note.noteType })
            },
          )
        } else {
          self.postMessage({ advertEarnings: 0 })
        }
      })
    } else if (message.isMined) {
      let note = await chrome.storage.session.get("currentNote")

      const isMined = { isMinedSend: false }

      if (note && note.currentNote) {
        note = JSON.parse(note.currentNote)
        const details = await chrome.storage.local.get(note.noteAddress.slice(0, 12) + "_mining_set")
        if (
          details[note.noteAddress.slice(0, 12) + "_mining_set"] &&
          details[note.noteAddress.slice(0, 12) + "_mining_set"] == "TRUE"
        ) {
          isMined.isMinedSend = true
          isMined.key = Date.now()
          const obj = {}
          obj[note.noteAddress.slice(0, 12) + "_current_mining_key"] = isMined.key
          chrome.storage.session.set(obj)
        }
      }

      self.postMessage(isMined)
    } else if (message.openUrl) {
      console.error(message.openUrl)
      chrome.tabs.create({ url: message.openUrl })
    }
  }
  return true
}

async function addEarnings(value) {
  let note = await chrome.storage.session.get("currentNote")

  if (!note || !note.currentNote || !isJsonable(note.currentNote)) return false

  note = JSON.parse(note.currentNote)
  let earnings = await chrome.storage.local.get(
    note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings",
  )

  if (earnings[note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"])
    earnings = Number.parseFloat(
      earnings[note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"],
    )
  else earnings = 0

  if (isNaN(earnings)) earnings = 0

  earnings += Number.parseFloat(value)
  await chrome.storage.local.set({
    [note.noteAddress.slice(0, 12).replaceAll(/[^a-zA-Z0-9]/g, "_") + "_advert_earnings"]: earnings,
  })
}

async function getData(key, data, url = "", type = "GET") {
  console.log("url setting: " + url)
  url = new URL(url)

  if (type == "GET") {
    if (typeof key == "object" && key.length && typeof data == "object" && data.length && data.length == key.length) {
      let x
      for (x = 0; x < key.length; x++) {
        url.searchParams.set(key[x], data[x])
      }
    } else if (typeof key == "string" && typeof data == "string") {
      url.searchParams.set(key, data)
    } else {
      /* this.errorMessage("data can't be gotten, Key and Data Gotten was not Properly Configured. Please Set the data and key as an array with the same length or as a String!!!"); */
      return false
    }
    const result = false
    try {
      return await fetch(url)
        .then((response) => {
          return response.text()
        })
        .then(async (result) => {
          if (isJsonable(result)) {
            result = JSON.parse(result)
          } else {
            result = result
          }

          return result
        })
        .catch(async (error) => {
          try {
            url = url.href
            url = new URL(url)
            let path = url.pathname
            if (path.split("/")[1] && path.split("/")[1] == path.replaceAll("/", "")) {
              path = path.replaceAll("/", "")
              url.searchParams.set("walletID", path)
            }
            url.pathname = ""
            return await fetch(url.href)
              .then((response) => {
                return response.text()
              })
              .then((result) => {
                result = result

                if (isJsonable(result)) {
                  result = JSON.parse(result)
                }
                return result
              })
              .catch((error) => {
                return false
              })
          } catch (e) {
            return false
          }
        })
    } catch (e) {
      return result
    }
  } else if (type == "POST") {
    const obj = {}
    if (typeof key == "object" && key.length && typeof data == "object" && data.length && data.length == key.length) {
      let x
      for (x = 0; x < key.length; x++) {
        obj[key[x]] = data[x]
      }
    } else if (typeof key == "string" && typeof data == "string") {
      obj[key] = data
    } else {
      //this.errorMessage("data can't be gotten, Key and Data Gotten was not Properly Configured. Please Set the data and key as an array with the same length or as a String!!!");
      return false
    }

    return await fetch(url.origin, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        if (isJsonable(data)) return JSON.parse(data)

        return data
      })
      .catch((error) => {
        console.error(error)
        console.log("url fetched: ", url.href)
        //this.errorMessage( error.toString() );
        return false
      })
  }
}

function isJsonable(data) {
  if (
    typeof data == "string" &&
    ((data.indexOf("{") == 0 && data.lastIndexOf("}") == data.length - 1) ||
      (data.indexOf("[") == 0 && data.lastIndexOf("]") == data.length - 1)) &&
    data != "[object Object]"
  )
    return true

  return false
}

function chunk_data(data, limit = 50) {
  let remaining = data
  let chunked = []

  for (let x = 0; remaining && x < remaining.length; x++) {
    chunked.push(remaining.slice(0, limit))
    remaining = remaining.slice(limit, remaining.length)
  }

  if (remaining && remaining.length > limit) {
    const rechunked = chunk_data(remaining, limit)
    chunked = chunked.concat(rechunked)
  } else if (remaining && remaining.length) {
    chunked.push(remaining)
  }

  return chunked
}

function generateKey(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

async function runWebsocket(block, url) {
  // Enhanced WebSocket and Supabase with broadcast AND database subscriptions
  //const websocket = new WebSocket(`${url}`)
return;
  console.log("supabase running for: ", block.blockID );

  console.log("client created: ", createClient, "block: ", block )

  // Broadcast channel for real-time messaging
  const channel = supabase.channel("general")

  // Listen for broadcasts
  channel.on("broadcast", { event: "block_broadcast" }, (payload) => {
    self.postMessage({
      type: 'broadcast',
      data: isJsonable(payload.payload.text) 
        ? JSON.parse(payload.payload.text) 
        : payload.payload.text
    })
  })

  // Subscribe to the broadcast channel
  await channel.subscribe()

  // Database realtime subscription
  const dbChannel = supabase
    .channel('blocks-changes')
    .on(
      'postgres_changes',
      {
        event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
        schema: 'public',
        table: 'blocks'
      },
      (payload) => {
        console.log('[v0] Database change detected:', payload.eventType)
        
        // Post message with the type of change and the data
        self.postMessage({
          type: 'database',
          eventType: payload.eventType, // 'INSERT', 'UPDATE', or 'DELETE'
          data: payload.new, // New data (for INSERT/UPDATE)
          oldData: payload.old, // Old data (for UPDATE/DELETE)
          timestamp: new Date().toISOString()
        })
      }
    )
    .subscribe()

  // Optional: Listen to specific events separately
  const insertChannel = supabase
    .channel('blocks-inserts')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'blocks'
      },
      (payload) => {
        console.log('[v0] New block inserted:', payload.new)
        self.postMessage({
          type: 'insert',
          data: payload.new
        })
      }
    )
    .subscribe()

  // Save block to database
  async function saveBlock(block) {
    try {
      const { data, error } = await supabase
        .from('blocks')
        .insert({
          block_id: block.blockID,
          former_block_id: block.formerBlockID,
          next_block_id: block.nextBlockID,
          note_hash: block.noteHash,
          trans_hash: block.transHash,
          real_hash: block.realHash,
          total_hash: block.totalHASH,
          block_hash: block.blockHash,
          note_sign: block.noteSign,
          note_server: block.noteServer,
          note_value: block.noteValue,
          note_type: block.noteType,
          trans_value: block.transValue,
          rank_pref: block.rankPref,
          trans_type: block.transType,
          credit_type: block.creditType,
          trans_time: block.transTime,
          recipient: block.recipient,
          reference_id: block.referenceID,
          reference_key: block.referenceKey,
          split_id: block.splitID,
          wallet_hash: block.walletHASH,
          former_wallet_hash: block.formerWalletHASH,
          wallet_sign: block.walletSign,
          block_key: block.blockKey,
          block_sign: block.blockSign,
          block_ref: block.blockRef,
          sign_ref: block.signRef,
          agreements: block.agreements,
          last_agree_hash: block.lastAgreeHash,
          agree_hash: block.agreeHash,
          note_id: block.noteID,
          expiry: block.expiry,
          interest_rate: block.interestRate,
          interest_type: block.interestType,
          budget_refs: block.budgetRefs,
          budget_id: block.budgetID,
          product_id: block.productID,
          agreement: block.agreement,
          exchange_note: block.exchangeNote,
          ex_block_id: block.exBlockID,
          ex_next_block_id: block.exNextBlockID,
          ex_former_block_id: block.exFormerBlockID,
          product_block_id: block.productBlockID,
          product_next_block_id: block.productNextBlockID,
          product_former_block_id: block.productFormerBlockID
        })
        .select()

        const budgets = ["CREATEBUDGET", "UPDATEBUDGET", "REMOVEBUDGET"];
        const products = [];
        const adverts = [];
        let agreement = false;

        if(block.agreement && budgets.includes(block.transType) && block.agreement.budgetID){
          await supabase
          .from('budgets')
          .insert({
            name					: block.agreement.name, //unique name for the budget, can be a business or website name.
            value					: block.agreement.value, //the total value of a Scriptbill Budget. Always Used to Increase stock value manually
            max_exec				: block.agreement.max_exec, //maximum time the budget would execute.
            budgetID				: block.agreement.budgetID,//the public Key of the Budget,the private ke would be set on the note with the block ID where the budget is kept.
            sleepingPartner 		: block.agreement.sleepingPartner, //this is the description for a sleeping investor.
            workingPartner		: block.agreement.workingPartner, //this is the description for a working investor.
            sleepingPartnerShare	: block.agreement.sleepingPartnerShare, //this is the rate that describes the sleepig investor share.
            workingPartnerShare	: block.agreement.workingPartnerShare, //this is the rate that describes the sleepig investor share.
            budgetItems			: block.agreement.budgetItems,//items that are in the budget that constitute the budget
            budgetSign			: block.agreement.budgetSign, //the signature on the budget
            budgetRef				: block.agreement.budgetRef,//reference to the budget signature.
            budgetType			: block.agreement.budgetType, // "personal" & "family" tells that this budget 
            //is not business related budget and won't accept investment. Any investment to this budget type will not 
            //issue any stocks. "governmental" budget will issue bonds not stocks to the investor and used by 
            //business managers and any persons or organization who support the economy, business budget will issue stocks to investor.
            orientation			: block.agreement.orientation,//telling whether this budget is a "straight" or "recursive" 
            //budget. If straight the budget block expires when the budget executes. but if recursive, the budget 
            //block will renew until the time for the recursion stops.
            recursion				: block.agreement.recursion,//used to describe how many times the budget will execute if the budget is a recursive budget
            budgetSpread			: block.agreement.budgetSpread, //time required for the budget to spread after it has executed. Works for a recursive budgetType
            budgetCredit			: block.agreement.budgetCredit, //the acceptable credit for investing and executing this budget. Budget credit should be set according to how the item in the budget is valued.
            budgetDesc			  : block.agreement.budgetDesc, //the description of the budget. This will give investors view of what product or products that will be produced under this budget, and everything investors need to know about this budget.
            budgetImages			: block.agreement.budgetImages,//array of image url that can describe the budget products and effects.
            budgetVideos			  : block.agreement.budgetVideos, //array of videos that describe the budgets to investors.
            companyRanks			  : block.agreement.companyRanks,//rank codes that will be occupied by users in the company. If you are employed in the company, a special rank code will be assigned you and the public key stored on the budget block
            stockID				      : block.agreement.stockID,//default scriptbill stocks code.
            investorsHub			  : block.agreement.investorsHub,//an array of hashes that can only be verified by people who hold stocks to this budget. This hash also test for the values on their stock note.
            //if an investor sell his stock, the exchange market must test to see if the stock is 
            //true by testing the hashes, deduct the sold value from his account, issue out money 
            //to the seller and updating the hub hashes if only the investor hash stocks with the company who owns this budget. InvestorHub works majorly for business and 
            //governmental budget types. Personal and Family budget types will not trade their 
            //stocks because it does not have a real business value.
            agreement				    : block.agreement.agreement,//describes the extra agreenebt the budget creator would like to have with 
            //their investor. This should only be configured using the this.defaultAgree option.
            
          }).select()
          agreement = block.agreement.agreement;
        } 
        else if(block.agreement && products.includes(block.transType) && block.agreement.productConfig){
          await supabase
          .from('products')
          .insert( {
              block_id:block.blockID,
              value			: block.agreement.productConfig.value,//the original value of the product.
              units			: block.agreement.productConfig.units,//the units of products available in the System
              totalUnits	: block.agreement.productConfig.totalUnits,//total units of product included to the scriptbill systems
              name			: block.agreement.productConfig.name, // the name of the product.
              description	: block.agreement.productConfig.description,//description of product, HTML allowed
              images		: block.agreement.productConfig.images,//urls to images that describe the product
              videos		: block.agreement.productConfig.videos, //urls to videos that describe the product
              creditType	: block.agreement.productConfig.creditType, //the type of credit which the product is being valued.
              sharingRate	: block.agreement.productConfig.sharingRate,//the profit sharing rate on the product
              blockExpiry	: block.agreement.productConfig.blockExpiry, //tells time the transaction block of the buyer will expire.
              budgetID		: block.agreement.productConfig.budgetID,//the ID of the budget the product belongs to. Budget IDs in the Scriptbill Network is an ID of a Company in the Network that manages the STOCK note credit the budget produces. business and governmental budget are budget that produces exchangeable credits in the network.
              
            }).select()
          agreement = block.agreement;
        } 

        
        else if(block.agreement && adverts.includes(block.transType) && block.agreement.advertID){
          await supabase
          .from('adverts')
          .insert( {
            block_id:block.blockID,
            advertID : block.agreement.advertID,//this carries the id of the advert to be created
            productID : block.agreement.productID,//this carries the product that the advert is promoting
            viewers		: block.agreement.viewers, //number of viewers you are planning to send this advert to.
            viewersShare : block.agreement.viewersShare,//this is the rate of the transvalue going to viewers.
            publishers 	: block.agreement.publishers, //number of publishers you want to show this advert to.
            publishShare 	: block.agreement.publishShare,//rate of advert funds going to publishers.
            scope 		: block.agreement.scope, //this is the name of the area the advert will be shown to, people not living in this area won't participate in the view or view share of the advert.
            banner 		: block.agreement.banner,//this is the url of the banner that this advert represent.
            video 		: block.agreement.video,//this is the url of the video that will show this ads.
            interest 	: block.agreement.interest,//an array of interest that you are targetting with your advert
          }).select()
        } 
        else if(block.agreement && block.agreement.agreeID){
          agreement = block.agreement;
        }
        
        if( agreement && agreement.agreeID ){
          await supabase
        .from('agreements')
        .insert({
          block_id: block.blockID,          
          agreeID			: agreement.agreeID, //this is the unique identifier of the agreement.
          agreeSign		: agreement.agreeSign, //this is the unique signature of the agreement, to be signed by the initiator of the agreement
          agreeKey		: agreement.agreeKey, //this is the public key to the agreement, used to verify the agreement signature and to verify the beneficiary account.
          senderSign		: agreement.senderSign, //this is the unique signature of the sender,
          senderID		: agreement.senderID, //this is the block ID of the sender, used as a signature text for the signature.
          senderKey		: agreement.senderKey, //key used by sender to sign this agreement
          recieverID		: agreement.recieverID, //this is the identifier of the block of the reciever, this is useful when other nodes want to accept the new agreement as valid.
          recieverKey		: agreement.recieverKey, //key used by reciever to sign this agreement
          maxExecTime		: agreement.maxExecTime, //this is the maximum time allowed for the agreement to last on the block chain. If this time elapses, the agreement would be executed by force,  forcing the note of the creator to reduce even to a negative value.
          agreeType		: agreement.agreeType,//this describes the type of agreement we are handling. values are "normal", which denotes that the agreement should be handled normally, that is if terms are not met agreement should be reverted to the sender. The "sendTo" type ensures that the funds are sent to a particular or an array of note addresses, specifying the values to be sent per address when the execution time reach or when the agreement terms are not met. "Loan" type specifies that the money was borrowed to the recipient and must be returned at the specified time. The "loan" type works with interest rates. "contract" agreement type works like budget for the recipient, because it tells how the recipient should use the money, base on an initial quote sent by the recipient in a QUOTE transaction
          ExecTime		: agreement.ExecTime, //this is the execution time for the agreement, this will only successfully run the agreement if and only if the note that holds the agreement has enough funds to sponsor the agreement, else agreement would not run but would wait until their is a RECIEVE transaction that would update the note'this.s value.
          value			: agreement.value, //this is the total value of the agreement, the transaction value of a transaction is mostly used here. For security reasons, this value cannot be larger than the value of the transaction.
          isPeriodic		: agreement.isPeriodic, //a boolean value that tells whether this should run periodically, if it will run periodically, the periodic value will be calculated
          times			: agreement.times, //works with the isPeriodic, if set to true, the value of this variable will be used against the value variable to determine how much the account will spend
          payTime			: agreement.payTime, //this is the time for the next payment, works when isPeriodic is set to true, else the execTime determines the payment
          payPeriod		: agreement.payPeriod, //this is the spread of payment that controls how scripts should set the payTime. If 1 week, when the payment has been executed, the pay period is used to calculate the next payTime.
          delayInterest	: agreement.delayInterest, //this determine the amount of interest that would be charged if the execTime is exceeded before the contract ends.
          interestType	: agreement.interestType, //This is the type of interest that would be charged; accepts SIMPLE & COMPOUND.
          interestSpread	: agreement.interestRate, //this determine the spread at which the interest will be calculated.
          interestRate    : agreement.interestRate,
          timeStamp		: agreement.timeStamp, //this is the signature of the timestamp of the agreement. This is designed to avoid duplicate agreement issues.
          realNonce		: agreement.realNonce,//hashed of the current note ID.
          recieverSign 	: agreement.recieverSign,//this is the signature on the agreement which is signed by the sender with the senders key to verify that the agreement has been met by the reciever. The sender will have to create an AGREEMENTSIGN transaction, referencing the blockID to the AGREEMENTREQUEST transaction sent by the reciever to obey this.
          quoteID			: agreement.quoteID,//this is the block ID to the reference block that has the quote to the agreement in a contract based agreement.
          sendAddress		: agreement.sendAddress,//this is the address or group of addresses to send the agreement value to, this correspond to a sendTo agreement type. if it is a group, then values to be sent to each address should be specified. If the execution time for each address is different, then this should be specified, else the general execution time will be followed for all address. 
		
	
        })
        .select()
        }

      if (error) {
        console.error('[v0] Error saving block:', error)
        throw error
      }

      console.log('[v0] Block saved successfully:', data)
      return data
    } catch (err) {
      console.error('[v0] Failed to save block:', err)
      throw err
    }
  }

  // Save and broadcast the block
  async function processBlock(block) {
    try {
      console.log("processing block: ", block.blockID )
      // Save to database (this will trigger the database subscription)
      await saveBlock(block)
      
      // Also broadcast to channel for immediate updates
      await channel.send({
        type: "broadcast",
        event: "block_broadcast",
        payload: { text: JSON.stringify(block) }
      })
      
      console.log('[v0] Block processed successfully')
    } catch (error) {
      console.error('[v0] Error processing block:', error)
      self.postMessage({ 
        type: 'error',
        error: error.message 
      })
    }
  }

  // Cleanup function
  function cleanup() {
    channel.unsubscribe()
    dbChannel.unsubscribe()
    insertChannel.unsubscribe()
    //websocket.close()
  }

  // Call the function with your block
  await processBlock(block)

}


