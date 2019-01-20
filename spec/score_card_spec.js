describe('Bowling Scorecard', ()=>{
  describe('Gutter game', ()=>{
    scorecard1 = new ScoreCard
    it('returns zero if user gutters ball for all 10 frames', ()=>{
      for(let i =0; i <=20; i++){
        scorecard1.roll(0);
      }
      expect(scorecard1.is_complete).toBe(true);
      expect(scorecard1.final_score).toEqual(0);
    });
  });
});
