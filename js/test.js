window.TX = {
    // Get a real note (has walletID, blockID, noteAddress, noteSecret).
    async realNote() {
        let n = Scriptbill.__testGetNote();
        if (!n || !n.walletID || !n.blockID) {
            n = await Scriptbill.getCurrentNote().catch(() => null);
        }
        if (!n) console.warn("No real note available. Run CREATE or load a saved note first.");
        return n;
    },

    // Get the current exchange note for a note type.
    async exchangeNote(type = "SBCRD") {
        return await Scriptbill.getCurrentExchangeNote(type).catch(() => null);
    },

    // Get the last block of a given transType.
    async lastBlock(transType) {
        const blocks = await Scriptbill.getTransBlock(1, { transType }).catch(() => []);
        return blocks.length ? blocks[0] : null;
    },

    // Get the note's first budget secret (or null).
    budgetSecret(n) {
        return (n && n.noteBudgets && n.noteBudgets.length) ? n.noteBudgets[0] : null;
    },

    // Reset stuck counters before a test run.
    reset() {
        Scriptbill.countError = 0;
    },
};

//create transaction test
(async () => {
    TX.reset();
    const r = await Scriptbill.verifyFingerprint({
        type: "CREATE",
        details: { transType: "CREATE", transValue: 0, recipient: "" },
        setup: (s) => {
            const n = JSON.parse(JSON.stringify(s.defaultScriptbill));
            n.noteValue   = 0;
            n.noteAddress = "";
            n.noteSecret  = "";
            n.blockID     = "";
            n.noteID      = "0000";
            n.noteKey     = "";
            n.walletRank  = "";
            s.__testSetNote(n);
            s.__testSetSeed("");
        },
    });
    Scriptbill.printFingerprint(r);
})();

//UPDATE transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note || !note.walletID || !note.blockID) {
        console.warn("UPDATE needs a real note with walletID + blockID. Run CREATE or load a saved note.");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "UPDATE",
        details: { transType: "UPDATE", transValue: 0 },
        setup: (s) => {
            s.__testSetNote(note);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//SEND transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note || !note.walletID || !note.blockID) {
        console.warn("SEND needs a real note with value >= 10.");
        return;
    }
    const recipient = prompt("Enter a 171-char note address for the SEND recipient:");
    if (!recipient || recipient.length !== 171) {
        console.warn("Recipient must be 171 characters.");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "SEND",
        details: { transType: "SEND", transValue: 1, recipient },
        setup: (s) => {
            note.noteValue = Math.max(parseFloat(note.noteValue || 0), 10);
            s.__testSetNote(note);
            s.__testSetIsExchangeMining(false);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//WITHDRAW transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note || !note.walletID || !note.blockID) {
        console.warn("WITHDRAW needs a real note with value >= 10.");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "WITHDRAW",
        details: {
            transType: "WITHDRAW",
            transValue: 1,
            withdrawAccount: {
                accountType: "BTC",
                accountDetails: "bc1qxxscuyxs2szjrnwrpqfzehf4rmxmz9wn99jyqd",
            },
        },
        setup: (s) => {
            note.noteValue = Math.max(parseFloat(note.noteValue || 0), 10);
            s.__testSetNote(note);
            s.__testSetIsExchangeMining(false);
            s.__testSetIsExchangeDeposit(false);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//DEPOSIT transaction test:
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note || !note.walletID) {
        console.warn("DEPOSIT needs a real note.");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "DEPOSIT",
        details: { transType: "DEPOSIT", transValue: 1 },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetIsExchangeMining(false);
            s.__testSetIsExchangeDeposit(false);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//CREATEPRODUCT transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note || !note.budgetID) {
        console.warn("CREATEPRODUCT needs a note with a business budgetID.");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "CREATEPRODUCT",
        details: {
            transType: "CREATEPRODUCT",
            transValue: 0,
            agreement: {
                productConfig: {
                    value: 10, units: 1, totalUnits: 1,
                    name: "Test Product", description: "Test",
                    images: [], videos: [],
                    creditType: "SBCRD", sharingRate: 0.2,
                    blockExpiry: "1 months",
                    budgetID: "REPLACE_WITH_BUSINESS_BUDGET_ID",
                    stockID: "TESTSTK",
                },
            },
        },
        setup: (s) => {
            s.__testSetNote(note);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//UPDATEPRODUCT transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const productID = prompt("Enter the productID to update:");
    if (!productID) return;
    const r = await Scriptbill.verifyFingerprint({
        type: "UPDATEPRODUCT",
        details: {
            transType: "UPDATEPRODUCT",
            transValue: 10,
            productID,
            agreement: { value: 12, units: 2 },
        },
        setup: (s) => { s.__testSetNote(note); },
    });
    Scriptbill.printFingerprint(r);
})();

//CREATEBUDGET transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "CREATEBUDGET",
        details: {
            transType: "CREATEBUDGET",
            transValue: 100,
            agreement: {
                budgetType: "personal",
                budgetCredit: "SBCRD",
                budgetItems: [],
                stockID: "",
                name: "Test Budget",
                value: 100,
            },
        },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetBudgetSecret(note.budgetID || "TEST_BUDGET_SECRET");
        },
    });
    Scriptbill.printFingerprint(r);
})();

//UPDATEBUDGET transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    const secret = TX.budgetSecret(note);
    if (!note || !secret) {
        console.warn("UPDATEBUDGET needs a note with noteBudgets[].");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "UPDATEBUDGET",
        details: {
            transType: "UPDATEBUDGET",
            transValue: 0,
            agreement: {
                budgetID: prompt("Enter budget pub ID:") || "",
                budgetItems: [],
            },
        },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetBudgetSecret(secret);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//ADDITEM transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    const secret = TX.budgetSecret(note);
    if (!note || !secret) {
        console.warn("ADDITEM needs a note with noteBudgets[].");
        return;
    }
    const r = await Scriptbill.verifyFingerprint({
        type: "ADDITEM",
        details: {
            transType: "ADDITEM",
            transValue: 10,
            recipient: prompt("Enter item recipient (171-char note address):") || "",
            agreement: {
                itemName: "Test Item",
                itemValue: 10,
                itemProduct: prompt("Enter item productID:") || "",
                itemID: "",
                itemCredit: "SBCRD",
            },
        },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetBudgetSecret(secret);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//UPDATEITEM transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    const secret = TX.budgetSecret(note);
    if (!note || !secret) { console.warn("UPDATEITEM needs noteBudgets[]."); return; }
    const itemID = prompt("Enter the item block ID to update:");
    if (!itemID) return;
    const r = await Scriptbill.verifyFingerprint({
        type: "UPDATEITEM",
        details: {
            transType: "UPDATEITEM",
            transValue: 20,
            itemID,
            agreement: {
                itemName: "Updated Item",
                itemValue: 20,
                itemProduct: prompt("Enter productID:") || "",
                itemID,
                itemCredit: "SBCRD",
            },
        },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetBudgetSecret(secret);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//CANCELITEM transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    const secret = TX.budgetSecret(note);
    if (!note || !secret) { console.warn("CANCELITEM needs noteBudgets[]."); return; }
    const itemID = prompt("Enter the item block ID to cancel:");
    if (!itemID) return;
    const r = await Scriptbill.verifyFingerprint({
        type: "CANCELITEM",
        details: { transType: "CANCELITEM", transValue: 0, itemID, agreement: {} },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetBudgetSecret(secret);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//LOAN transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note || !note.walletID) { console.warn("LOAN needs a real note."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "LOAN",
        details: { transType: "LOAN", transValue: 10, agreement: {} },
        setup: (s) => {
            note.noteValue = Math.max(parseFloat(note.noteValue || 0), 100);
            s.__testSetNote(note);
            s.__testSetIsExchangeMining(false);
            s.__testSetAccount({ loanValue: 0, loanID: "" });
        },
    });
    Scriptbill.printFingerprint(r);
})();

//INTERESTPAY traansaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const agrees = await Scriptbill.getNoteAgreements().catch(() => null);
    const agreeID = agrees ? Object.keys(agrees)[0] : null;
    if (!agreeID) { console.warn("No LOAN agreement — run type 13 first."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "INTERESTPAY",
        details: {
            transType: "INTERESTPAY",
            transValue: 1,
            agreement: { ...agrees[agreeID], agreeID },
        },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetAccount({ loanValue: 10, loanID: "" });
        },
    });
    Scriptbill.printFingerprint(r);
})();

//AGREESEND transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const agrees = await Scriptbill.getNoteAgreements().catch(() => null);
    const agreeID = agrees ? Object.keys(agrees)[0] : null;
    if (!agreeID) { console.warn("No agreement — run type 13 or 3 first."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "AGREESEND",
        details: {
            transType: "AGREESEND",
            transValue: 1,
            agreement: { ...agrees[agreeID], agreeID },
        },
        setup: (s) => {
            note.noteValue = Math.max(parseFloat(note.noteValue || 0), 10);
            s.__testSetNote(note);
            s.__testSetAgreeBlock(null);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//AGREEMENTREQUEST transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const agrees = await Scriptbill.getNoteAgreements().catch(() => null);
    const agreeID = agrees ? Object.keys(agrees)[0] : null;
    if (!agreeID) { console.warn("No agreement — run type 3 first."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "AGREEMENTREQUEST",
        details: {
            transType: "AGREEMENTREQUEST",
            transValue: 0,
            recipient: agrees[agreeID].agreeKey,
            agreement: { ...agrees[agreeID], agreeID },
        },
        setup: (s) => { s.__testSetNote(note); },
    });
    Scriptbill.printFingerprint(r);
})();

//AGREEMENTREQUEST transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const agrees = await Scriptbill.getNoteAgreements().catch(() => null);
    const agreeID = agrees ? Object.keys(agrees)[0] : null;
    if (!agreeID) { console.warn("No agreement — run type 3 first."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "AGREEMENTREQUEST",
        details: {
            transType: "AGREEMENTREQUEST",
            transValue: 0,
            recipient: agrees[agreeID].agreeKey,
            agreement: { ...agrees[agreeID], agreeID },
        },
        setup: (s) => { s.__testSetNote(note); },
    });
    Scriptbill.printFingerprint(r);
})();

//AGREEMENTSIGN transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const reqs = await Scriptbill.getTransBlock(1, { transType: "AGREEMENTREQUEST" }).catch(() => []);
    if (!reqs.length) { console.warn("Run type 16 first."); return; }
    const response = reqs[0];
    const r = await Scriptbill.verifyFingerprint({
        type: "AGREEMENTSIGN",
        details: { transType: "AGREEMENTSIGN", transValue: 0, recipient: response.recipient },
        response,
        setup: (s) => { s.__testSetNote(note); },
    });
    Scriptbill.printFingerprint(r);
})();

//CANCELLED transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const sends = await Scriptbill.getTransBlock(1, { transType: "SEND" }).catch(() => []);
    if (!sends.length) { console.warn("Run type 3 first."); return; }
    const response = sends[0];
    const r = await Scriptbill.verifyFingerprint({
        type: "CANCELLED",
        details: { transType: "CANCELLED", transValue: 0, recipient: null },
        response,
        setup: (s) => { s.__testSetNote(note); },
    });
    Scriptbill.printFingerprint(r);
})();

//BUYPRODUCT transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const r = await Scriptbill.verifyFingerprint({
        type: "BUYPRODUCT",
        details: {
            transType: "BUYPRODUCT",
            transValue: 10,
            productID: prompt("Enter productID:") || "",
            recipient: prompt("Enter product owner noteAddress (171 chars):") || "",
        },
        setup: (s) => {
            note.noteValue = Math.max(parseFloat(note.noteValue || 0), 20);
            s.__testSetNote(note);
            s.__testSetIsExchangeMining(false);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//PRODUCTSUB transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const productID = prompt("Enter productID:");
    if (!productID) return;
    const r = await Scriptbill.verifyFingerprint({
        type: "PRODUCTSUB",
        details: {
            transType: "PRODUCTSUB",
            transValue: 10,
            productID,
            recipient: prompt("Enter product owner noteAddress:") || "",
            subConfig: {
                subSpread: "1 weeks", nextSub: "", subUnit: 1,
                productID, value: 10, lastSub: 0, subsID: "",
            },
        },
        setup: (s) => {
            note.noteValue = Math.max(parseFloat(note.noteValue || 0), 20);
            s.__testSetNote(note);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//PROFITSHARING transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const productID = prompt("Enter productID:");
    if (!productID) return;
    const r = await Scriptbill.verifyFingerprint({
        type: "PROFITSHARING",
        details: {
            transType: "PROFITSHARING",
            transValue: 5,
            productID,
            recipient: null,
            agreement: { agreeID: "TEST", sharingRate: 0.2 },
        },
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetShareValue(5);
        },
    });
    Scriptbill.printFingerprint(r);
})();

//PROFITRECIEVE transaction test
(async () => {
    TX.reset();
    const note = await TX.realNote();
    if (!note) { console.warn("No note."); return; }
    const shareBlocks = await Scriptbill.getTransBlock(1, { transType: "PROFITSHARING" }).catch(() => []);
    if (!shareBlocks.length) { console.warn("Run type 21 first."); return; }
    const response = shareBlocks[0];
    const r = await Scriptbill.verifyFingerprint({
        type: "PROFITRECIEVE",
        details: {
            transType: "PROFITRECIEVE",
            transValue: response.transValue,
            productID: response.productID || prompt("Enter productID:") || "",
            recipient: response.recipient,
            agreement: response.agreement,
        },
        response,
        setup: (s) => {
            s.__testSetNote(note);
            s.__testSetShareValue(parseFloat(response.transValue));
        },
    });
    Scriptbill.printFingerprint(r);
})();