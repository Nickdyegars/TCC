import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

interface SearchViewProps {
  onSearch: (query: string) => void;
  onVisibilityChange?: (visible: boolean) => void;
}

const SearchView: React.FC<SearchViewProps> = ({ onSearch, onVisibilityChange }) => {
  const [query, setQuery] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  const toggleInputVisibility = () => {
    const newVisibility = !isInputVisible;
    setIsInputVisible(newVisibility);
    onVisibilityChange?.(newVisibility); // 👈 informa o componente pai
  };

  return (
    <S.Container>
      <S.IconButton onPress={toggleInputVisibility}>
        <Feather name="search" size={24} color="black" />
      </S.IconButton>
      {isInputVisible && (
        <S.Input
          placeholder="Buscar..."
          value={query}
          onChangeText={handleSearch}
          placeholderTextColor="#000"
          autoFocus
        />
      )}
    </S.Container>
  );
};

export default SearchView;
