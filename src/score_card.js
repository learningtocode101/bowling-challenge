class ScoreCard {
  constructor() {
    this.is_complete = false;
    this.roll_count = 0;
    this.current_frame = [];
    this.final_score = 0
  }
  ball_roll(roll) {
    this.roll_count ++;
    if (this.roll_count == 20) {
      this.is_complete = true;
      this.final_score = 0;
    }
  }

}
