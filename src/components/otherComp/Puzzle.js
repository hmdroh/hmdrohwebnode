import React from 'react';
// import $ from 'jquery';
import "./puzzle.css";

export default class Puzzle extends React.Component {

    constructor(props) {
      super(props);
      this.state = { 
          showPic: true,
          picTouch: true,
          resetPuzzle: {
            puzzle1: {     "grid-column": "1/3",
            "grid-row": "1"}
            ,
puzzle2: {     "grid-column": "2/3",
            "grid-row": "1"}
            ,
puzzle3: {     "grid-column": "3/3",
            "grid-row": "1"}
            ,
puzzle4: {     "grid-column": "1/3",
            "grid-row": "2"}
            ,
puzzle5: {     "grid-column": "2/3",
            "grid-row": "2"}
            ,
puzzle6: {     "grid-column": "3/3",
            "grid-row": "2"}
            ,
puzzle7: {     "grid-column": "1/3",
            "grid-row": "3"}
            ,
puzzle8: {     "grid-column": "2/3",
            "grid-row": "3"}
          },
            tempPuzzle: {
            puzzle1: {     "grid-column": "1/3",
            "grid-row": "1"}
            ,
puzzle2: {     "grid-column": "2/3",
            "grid-row": "1"}
            ,
puzzle3: {     "grid-column": "3/3",
            "grid-row": "1"}
            ,
puzzle4: {     "grid-column": "1/3",
            "grid-row": "2"}
            ,
puzzle5: {     "grid-column": "2/3",
            "grid-row": "2"}
            ,
puzzle6: {     "grid-column": "3/3",
            "grid-row": "2"}
            ,
puzzle7: {     "grid-column": "1/3",
            "grid-row": "3"}
            ,
puzzle8: {     "grid-column": "2/3",
            "grid-row": "3"}
          },
          showPuzzle: {
            puzzle1: {     "grid-column": "1/3",
            "grid-row": "1"}
            ,
puzzle2: {     "grid-column": "2/3",
            "grid-row": "1"}
            ,
puzzle3: {     "grid-column": "3/3",
            "grid-row": "1"}
            ,
puzzle4: {     "grid-column": "1/3",
            "grid-row": "2"}
            ,
puzzle5: {     "grid-column": "2/3",
            "grid-row": "2"}
            ,
puzzle6: {     "grid-column": "3/3",
            "grid-row": "2"}
            ,
puzzle7: {     "grid-column": "1/3",
            "grid-row": "3"}
            ,
puzzle8: {     "grid-column": "2/3",
            "grid-row": "3"}
          }
       };
    //   this.currentPos = this.currentPos.bind(this);
        this.isClickable = this.isClickable.bind(this);
        this.getLocations = this.getLocations.bind(this);
        this.randomize = this.randomize.bind(this);
        this.showGame = this.showGame.bind(this);
        this.saveStates = this.saveStates.bind(this);
        this.showOriginal= this.showOriginal.bind(this);
    }
    
    getLocations(callbacks){
        let ar = {
            1: [false, false, false],
            2: [false, false, false],
            3: [false, false, false]
        };
        for(var i =1; i<9; i++){
            let gridCol = this.state["showPuzzle"]["puzzle"+i]["grid-column"];
                gridCol = gridCol.split("/")[0];
            let gridRow = this.state["showPuzzle"]["puzzle"+i]["grid-row"];

            ar[gridRow][gridCol-1] = true;
            
        }
        callbacks(ar);
    }

     isClickable(obNum){

        let gridColumn = this.state["showPuzzle"]["puzzle"+obNum]["grid-column"];
            gridColumn = Number(gridColumn.split("/")[0]);
        let gridRow = Number(this.state["showPuzzle"]["puzzle"+obNum]["grid-row"]);

        this.getLocations((locationOb)=>{

            if(locationOb[gridRow-1]){
                let top = locationOb[gridRow-1];
                if(!top[gridColumn-1]){
                    
                    this.setState(prevState => ({
                        ...prevState,
                        showPuzzle: {
                            ...prevState.showPuzzle,
                            ["puzzle"+obNum]: {
                                ...prevState.showPuzzle["puzzle"+obNum],
                                "grid-row": String(gridRow-1),
                            }
                        }
                    }));

                    //     {
                    //      ["showPuzzle"]["puzzle"+obNum]: {
                    //         "grid-row": String(gridRow-1),
                    //         "grid-column": this.state["showPuzzle"]["puzzle"+obNum]["grid-column"]
                    //     }
                    // })
                    this.saveStates();
                   return true;
                }
            }

            if(locationOb[gridRow+1]){
                let bottom = locationOb[gridRow+1];
                if(!bottom[gridColumn-1]){
                    this.setState(prevState => ({
                        ...prevState,
                        showPuzzle: {
                            ...prevState.showPuzzle,
                            ["puzzle"+obNum]: {
                                ...prevState.showPuzzle["puzzle"+obNum],
                                "grid-row": String(gridRow+1),
                            }
                        }
                    }));
                    
                    // this.setState({
                    //     ["puzzle"+obNum]: {
                    //         "grid-row": String(gridRow+1),
                    //         "grid-column": this.state["showPuzzle"]["puzzle"+obNum]["grid-column"]
                    //     }
                    // })
                    this.saveStates();
                    return true;
                }
            }


		if(gridColumn < 3 ){
			if(!locationOb[gridRow][gridColumn]){
                this.setState(prevState => ({
                    ...prevState,
                    showPuzzle: {
                        ...prevState.showPuzzle,
                        ["puzzle"+obNum]: {
                            ...prevState.showPuzzle["puzzle"+obNum],
                            "grid-column": String(Number(gridColumn + 1) +"/3")
                        }
                    }
                }));
                // this.setState({
                //     ["puzzle"+obNum]: {
                //         "grid-row": this.state["showPuzzle"]["puzzle"+obNum]["grid-row"],
                //         "grid-column": String(Number(gridColumn + 1) +"/3")
                //     }
                // })
                this.saveStates();
				return true;
			}
        }
        
        if(gridColumn > 1 ){
			if(!locationOb[gridRow][gridColumn-2]){
                this.setState(prevState => ({
                    ...prevState,
                    showPuzzle: {
                        ...prevState.showPuzzle,
                        ["puzzle"+obNum]: {
                            ...prevState.showPuzzle["puzzle"+obNum],
                            "grid-column": String(Number(gridColumn - 1) +"/3")
                        }
                    }
                }));
                // this.setState({
                //     ["puzzle"+obNum]: {
                //         "grid-row": this.state["showPuzzle"]["puzzle"+obNum]["grid-row"],
                //         "grid-column": String(Number(gridColumn - 1) +"/3")
                //     }
                // })
                this.saveStates();
				return true;
			}
		}
        this.saveStates();
        return false;

        })
        
        
    }
   
    saveStates(){



        this.setState(prevState => ({
            ...prevState,
            picTouch: false,
            showPic: true,
            tempPuzzle: {
                ...prevState.showPuzzle
            }
        }))
    }
    showGame(){
        this.setState(prevState => 
       
            ({
                ...prevState,
                showPic: true,
                showPuzzle: {
                    ...prevState.tempPuzzle
                }
            }))
    }
    showOriginal(){
        this.setState(prevState => ({
            ...prevState,
            showPic: false,
            tempPuzzle: {
                ...prevState.showPuzzle
            },
            showPuzzle: {
                ...prevState.resetPuzzle
            }
        }))
    }
    randomize() {
       for(var i = 1; i< 100; i++){
        setTimeout(() => {
            this.isClickable(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
        }, 0.1);
        setTimeout(() => {
            this.isClickable(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
        }, 0.1);
        setTimeout(() => {
            this.isClickable(Math.floor(Math.random() * (8 - 1 + 1)) + 1);
        }, 0.1);
    }
    this.setState(prevState => ({
        ...prevState,
        picTouch: false,
        showPic: true
    }));

    
}
    render(){

        return (
            <div className="PuzzleRealMain">
            <div className="PuzzleMainContainer">
            <ul className="PuzzleContainer">
                <li className="Puzzle Puzzle1" style={this.state.showPuzzle.puzzle1} onClick={()=>this.isClickable(1)}>1</li>
                <li className="Puzzle Puzzle2" style={this.state.showPuzzle.puzzle2} onClick={()=>this.isClickable(2)}>2</li>
                <li className="Puzzle Puzzle3" style={this.state.showPuzzle.puzzle3} onClick={()=>this.isClickable(3)}>3</li>
                <li className="Puzzle Puzzle4" style={this.state.showPuzzle.puzzle4} onClick={()=>this.isClickable(4)}>4</li>
                <li className="Puzzle Puzzle5" style={this.state.showPuzzle.puzzle5} onClick={()=>this.isClickable(5)}>5</li>
                <li className="Puzzle Puzzle6" style={this.state.showPuzzle.puzzle6} onClick={()=>this.isClickable(6)}>6</li>
                <li className="Puzzle Puzzle7" style={this.state.showPuzzle.puzzle7} onClick={()=>this.isClickable(7)}>7</li>
                <li className="Puzzle Puzzle8" style={this.state.showPuzzle.puzzle8} onClick={()=>this.isClickable(8)}>8</li>

            </ul>
                
            </div>
            <button onClick={this.randomize}>Randomize</button>
                {/* <button onClick={this.saveStates}>SaveGame</button> */}
                <button onClick={this.showGame} style={{"display":  this.state.showPic  ? "none" : "block"}}>Continue Game...</button>
                <button onClick={this.showOriginal} style={{"display":  this.state.showPic && !this.state.picTouch ?   "block" : "none"}}>Show Ordered Picture</button>
                <div className="puzzleText">(Aug 2019): Puzzle Game Made in React.js</div>

            </div>
        );
    }
}

