import React, { useState } from 'react';
import { Scale, Activity, Brain, Heart, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import WalkExerciseStep1 from './WalkExerciseStep1';
import WalkExerciseStep2 from './WalkExerciseStep2';
import WalkExerciseStep3 from './WalkExerciseStep3';
import WalkExerciseStep4 from './WalkExerciseStep4';
import WalkExerciseStep5 from './WalkExerciseStep5';

// Rest of the component code...

                      {step.isPremium ? (
                        <Link to="/pricing">
                          <Button variant="outline" size="sm">
                            Upgrade to Premium
                          </Button>
                        </Link>
                      ) : (
                        // Rest of the component code...
                      )
                      }