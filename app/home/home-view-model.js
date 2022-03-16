import { fromObject, Observable } from '@nativescript/core'
import { startAccelerometerUpdates } from "nativescript-accelerometer"

export function HomeViewModel() {
    const viewModel = new Observable()
    viewModel.x = 10
    viewModel.y = 20
    viewModel.z = 30

    var accelerometer = require("nativescript-accelerometer")
    accelerometer.startAccelerometerUpdates(function(data) {
        viewModel.set('x','X = ' + data.x.toFixed(3))
        viewModel.set('y', 'Y = ' + data.y.toFixed(3))
        viewModel.set('z', 'Z = ' +  data.z.toFixed(3))
  }, { sensorDelay: "ui" })

  return viewModel
}
