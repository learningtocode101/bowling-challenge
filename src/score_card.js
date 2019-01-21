class ScoreCard {
  constructor() {
    this.is_complete = false;
    this.roll_count = 0;
    this.frames = [];
    this.current_frame = [];
    this.scores = []
    this.final_score = 0
    this.frame_acc = 0;
  }
  roll(pins) {
    this.gutter_game();
    this.roll_count ++;
    this.current_frame.push(pins);
    this.is_strike(pins)
    this.final_score += this.current_frame[0];
    this.current_frame = [];
    this.next_frame()
  }
  next_frame(){
    if (this.roll_count == 2) {
      this.scores.push(this.final_score)
      this.frame_acc+=1
      this.roll_count = 0
    }
  }
  gutter_game(){
    if (this.frame_acc==10 && this.final_score==0) {
      this.final_score = 0
      this.is_complete = true
    }
  }
  is_strike(pins){
    if (pins == 10) {
        this.roll_count = 2
    }
  }
}
