document.getElementById("Felvitel").addEventListener("click", function () {
    var IDBOpenDBRequest_AdatKapcs = window.indexedDB.open("Penztarolo", 1);

    IDBOpenDBRequest_AdatKapcs.onsuccess = function () {
        console.log("OnSuccess");
        var IDBDatabase_db = this.result;

        var IDBTransaction_Tr1 = IDBDatabase_db.transaction("Holok", "readwrite");
        IDBTransaction_Tr1.oncomplete = function () {
            console.log("Sikerrel be lett szúrva az objektum, vége tranzakciónak :-)");
            IDBDatabase_db.close();
        };

        var IDBObjectStore_HolokTr = IDBTransaction_Tr1.objectStore("Holok");
        var IDBRequest_Breq1 = IDBObjectStore_HolokTr.add({Kategoria: document.getElementById("Kategoria").value, AlKategoria: document.getElementById("AlKategoria").value, Hol: document.getElementById("Hol").value});
        IDBRequest_Breq1.onsuccess = function () {
            console.log("Sikerült a Kategória felvitele :-)");
        };

        IDBRequest_Breq1.onerror = function () {
            console.log("Sikertelen a Kategória felvitele :-(");
        };
    };

    IDBOpenDBRequest_AdatKapcs.onerror = function () {
        console.log("Sikertelen az Adatbazis megnyitása :-(");
    };
}

);
