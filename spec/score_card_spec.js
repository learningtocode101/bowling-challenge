describe('Bowling Scorecard', ()=>{
  describe('Gutter game', ()=>{
    scorecard1 = new ScoreCard
    it('returns zero if user gutters ball for all 20 frame', ()=>{
      for(let i =0; i <=20; i++){
        scorecard1.ball_roll(20);
      }
      expect(scorecard1.is_complete).toBe(true);
      expect(scorecard1.final_score).toEqual(0);
    });
  });

});
