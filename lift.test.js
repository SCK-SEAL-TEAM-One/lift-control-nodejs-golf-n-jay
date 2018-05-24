const Lift = require('./lift.new')

describe('Lift Control', () => {

    describe('Not Overload', () => {

        describe('LiftgoingUp', () => {
             
            it('current floor 4 target 5 should be stop at floor 5', () => {
                const lift = new Lift(4)
                lift.move(500,5)
                expect(lift.currentfloor).toBe(5)
                expect(lift.status).toBe("stop")
            }); 
            it('current floor 1 target 3 should be stop at floor 3', () => {
                const lift = new Lift()
                lift.move(500,3)
                expect(lift.currentfloor).toBe(3)
                expect(lift.status).toBe("stop")
            }); 
        });
        describe('LiftgoingDown', () => {
             
            it('current floor 4 target 1 should be stop at floor 1', () => {
                const lift = new Lift(4)
                lift.move(500,1)
                expect(lift.currentfloor).toBe(1)
                expect(lift.status).toBe("stop")
            }); 
            it('current floor 3 target 2 should be stop at floor 2', () => {
                const lift = new Lift(3)
                lift.move(500,2)
                expect(lift.currentfloor).toBe(2)
                expect(lift.status).toBe("stop")
            }); 
        });
        describe('LiftStop', () => {
             
            it('current floor 1 target 1 should be stop at floor 1', () => {
                const lift = new Lift(1)
                lift.move(500,1)
                expect(lift.currentfloor).toBe(1)
                expect(lift.status).toBe("stop")
            }); 
            it('current floor 3 target 3 should be stop at floor 3', () => {
                const lift = new Lift(3)
                lift.move(500,3)
                expect(lift.currentfloor).toBe(3)
                expect(lift.status).toBe("stop")
            }); 
        });
        
    });
    
    describe('Overload', () => {
        it('current floor 1 should be stop at floor 1', () => {
            const lift = new Lift()
            lift.move(1500,5)
            expect(lift.currentfloor).toBe(1)
            expect(lift.status).toBe("stop")
            // expect(lift.error).toBe("overweight")
        }); 
        it('current floor 4 should be stop at floor 4', () => {
            const lift = new Lift(4)
            lift.move(1500,5)
            expect(lift.currentfloor).toBe(4)
            expect(lift.status).toBe("stop")
            // expect(lift.error).toBe("overweight")
        }); 
        it('current floor 2 maxweight is 500 current weight is 1500 should be stop at floor 2', () => {
            const lift = new Lift(2,500)
            lift.move(1500,5)
            expect(lift.currentfloor).toBe(2)
            expect(lift.status).toBe("stop")
            // expect(lift.error).toBe("overweight")
        }); 


    })
    
});