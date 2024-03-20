// VotingPage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './cssComponents/VotingPage.css'; // Import the CSS file for styling

const VotingPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  // Dummy vote counts (replace with actual data)
  const voteCounts = {
    candidate1: 0,
    candidate2: 0,
    candidate3: 0,
    candidate4: 0,
    candidate5: 0,
  };

  const candidates = [
    { id: '1000', name: 'Joseph Vijay Chandrasekhar', image: 'candidate 1.jpg' },
    { id: '1001', name: 'Donald Trump', image: 'candidate 2.jpg' },
    { id: '1002', name: 'Vladimir Putin', image: 'candidate 3.jpg' },
    { id: '1003', name: 'Xi Jinping', image: 'candidate 4.jpg' },
    { id: '1004', name: 'Boris Johnson', image: 'candidate 5.jpg' },
  ];

  const handleVote = () => {
    setShowConfirmationModal(true);
  };

  const confirmVote = () => {
    // Here you can implement the logic to submit the vote
    // For demonstration purposes, just log the selected option
    console.log('Voted for:', selectedOption);
    setVoteSubmitted(true);
    setShowConfirmationModal(false);
  };

  return (
    <motion.div
      className="voting-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="voting-header">Vote for your favorite candidate</h2>
      <motion.div
        className="candidates-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {candidates.map((candidate) => (
          <motion.div
            key={candidate.id}
            className="candidate-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="candidate-item">
              <img className='img1' src={`/${candidate.image}`} alt={candidate.name} />
              <label>
                <input
                className='input6'
                  type="radio"
                  value={candidate.id}
                  checked={selectedOption === candidate.id}
                  onChange={() => setSelectedOption(candidate.id)}
                />
                  <p>{candidate.name}</p>
              </label>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        className="vote-button"
        onClick={handleVote}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Vote
      </motion.button>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <motion.div
          className="confirmation-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="confirmation-modal-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Confirm Vote</h3>
            <p>Are you sure you want to vote for {selectedOption}?</p>
            <div className="confirmation-modal-buttons">
              <button onClick={confirmVote}>Yes, Vote</button>
              <button onClick={() => setShowConfirmationModal(false)}>Cancel</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Vote Submitted Message */}
      {voteSubmitted && (
        <motion.div
          className="vote-submitted-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Your vote for {selectedOption} has been submitted. Thank you for voting!</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VotingPage;
