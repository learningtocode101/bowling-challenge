class ScoreCard {
  constructor() {
    this.is_complete = false;
    this.roll_count = 0;
    this.current_frame = [];
    this.final_score = 0
    this.frame_acc = 0;
  }
  roll(pins) {
    this.roll_count ++;
    this.frame_acc ++;
    this.current_frame.push(pins);
    this.final_score += this.current_frame[0];
    if (this.frame_acc == 20 && this.final_score == 0) {
      this.is_complete = true;
      this.final_score;
    }
  }

}
