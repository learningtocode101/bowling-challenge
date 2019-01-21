describe('Bowling Scorecard', ()=>{
  describe('Gutter game', ()=>{
    scorecard1 = new ScoreCard
    it('returns zero if user gutters ball for all 10 frames', ()=>{
      for(let i =0; i <= 20; i++){
        scorecard1.roll(0);
      }
      expect(scorecard1.is_complete).toBe(true);
      expect(scorecard1.final_score).toEqual(0);
    });
  });
  describe('knocks down some pins in first frame', ()=>{
    scorecard2 = new ScoreCard
    it('return score for knocked pins', ()=>{
      scorecard2.roll(2);
      scorecard2.roll(3);
      expect(scorecard2.final_score).toEqual(5);
    })
  })
  describe('its a strike', ()=>{
    scorecard3 = new ScoreCard
    it('knocks down 10 pins in first roll', ()=>{
      scorecard3.roll(10);
      expect(scorecard3.final_score).toEqual(10);
      expect(scorecard3.roll_count).toBe(0);
    })
  })

});
