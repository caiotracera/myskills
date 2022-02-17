import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import { MySkillProps } from '../pages/Home';

export type SkillCardProps = {
  skill: MySkillProps;
} & TouchableOpacityProps;

export function SkillCard({ skill, ...props }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...props}>
      <Text style={styles.textSkill}>{skill.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
