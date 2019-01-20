class ScoreCard {
  constructor() {
    this.is_complete = false;
    this.roll_count = 0;
    this.frames = [];
    this.current_frame = [];
    this.scores = []
    this.final_score = 0
    // this.frame_acc = 0;
  }
  roll(pins) {
    if (this.roll_count==20 && this.final_score==0) {
      this.final_score == 0
      this.is_complete = true
    }
    this.roll_count ++;
    this.current_frame.push(pins);
    if (pins == 10) {
        console.log('Its a strike')
        this.roll_count = 2
    }
    this.final_score += this.current_frame[0];
    this.frames.push(this.current_frame[0]);
    this.current_frame = [];
    if (this.roll_count == 2) {
      this.scores.push(this.frames[0]+ this.frames[1])
      this.frames = []
      console.log('roll is at two')
    }

  }

}
