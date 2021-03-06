/**
 * @param {(value: number) => void} handleNewData
 * @returns {{connect: () => Promise<void>}}
 */
function BbBluetooth(handleNewData) {
    async function connect() {
        return navigator.bluetooth.requestDevice({
            filters: [{
                name: "ENTRALPI"
                }
            ],
            optionalServices: [
                // "f000ffc0-0451-4000-b000-000000000000", // blocklisted
                // "0000180a-0000-1000-8000-00805f9b34fb",
                // "0000180f-0000-1000-8000-00805f9b34fb",
                // "00001801-0000-1000-8000-00805f9b34fb",
                "0000fff0-0000-1000-8000-00805f9b34fb",
                // "0000181d-0000-1000-8000-00805f9b34fb",
                // "00001800-0000-1000-8000-00805f9b34fb"
            ],
            // acceptAllDevices: true
        })
        .then((device) => {
            if (!device.gatt) {
                throw new Error("No gatt server");
            }
            return device.gatt.connect();
        })
        .then(server => {
            return server.getPrimaryService("0000fff0-0000-1000-8000-00805f9b34fb");
        })
        .then(service => {
            return service.getCharacteristic("0000fff4-0000-1000-8000-00805f9b34fb");
        })
        .then(characteristic => {
            if (characteristic.properties.notify) {
                characteristic.addEventListener('characteristicvaluechanged', ev => {
                    // cast to any to disable warning about value not being a property of event handler.
                    /** @type {any} */
                    const target = ev.target;
                    if (target?.value?.getInt16(0)) {
                        if (handleNewData) handleNewData(target.value.getInt16(0));
                    }
                    else {
                        if (handleNewData) handleNewData(0);

                        // console.error("no target or no value for bluetooth.");
                    }
                });
                characteristic.startNotifications();
            } else {
                console.error("Cannot be notified by characteristic... Weird");
            }
        });
    }

    return { connect }
}
