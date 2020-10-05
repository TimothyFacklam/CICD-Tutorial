import Ticker from '../Components/Ticker';
import TickerController from '../Controllers/TickerController'

describe("Ticker Testing - With No Range Limiting", () => {
    test("Test Increment", () => {
        let controller = new TickerController()
        let initialValue = 0
        let finalValue = controller.increment(initialValue)
        let expectedValue = initialValue + 1
        expect(finalValue).toEqual(expectedValue);
    });


    test("Test Decrement", () => {
        let controller = new TickerController()
        let initialValue = 0
        let finalValue = controller.decrement(initialValue)
        let expectedValue = initialValue - 1
        expect(finalValue).toEqual(expectedValue);
    });
  });


  describe("Ticker Testing - With Range Limiting", () => {
    test("Test Increment - Range [0,10], StartVal = 0. Val should increment", () => {
        let controller = new TickerController()
        controller.setRange(0,10)
        let initialValue = 0
        let finalValue = controller.increment(initialValue)
        let expectedValue = initialValue + 1
        expect(finalValue).toEqual(expectedValue);
    });

    test("Test Increment - Range [0,10], StartVal = 10. Val should not increment. ", () => {
        let controller = new TickerController()
        controller.setRange(0,10)
        let initialValue = 10
        let finalValue = controller.increment(initialValue)
        let expectedValue = initialValue
        expect(finalValue).toEqual(expectedValue);
    });

    test("Test Decrement - Range [0,10], StartVal = 10. Val should decrement", () => {
        let controller = new TickerController()
        controller.setRange(0,10)
        let initialValue = 10
        let finalValue = controller.decrement(initialValue)
        let expectedValue = initialValue - 1
        expect(finalValue).toEqual(expectedValue);
    });

    test("Test Decrement - Range [0,10], StartVal = 0. Val should not decrement. ", () => {
        let controller = new TickerController()
        controller.setRange(0,10)
        let initialValue = 0
        let finalValue = controller.decrement(initialValue)
        let expectedValue = initialValue
        expect(finalValue).toEqual(expectedValue);
    });
  });